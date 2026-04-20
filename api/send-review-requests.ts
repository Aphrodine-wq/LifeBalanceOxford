import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Timestamp } from 'firebase-admin/firestore';
import { requireCron } from './_lib/auth.js';
import { getDb, VISITS_COLLECTION, VisitRecord, ChannelResult } from './_lib/firebase.js';
import { sendSms } from './_lib/twilio.js';
import { sendReviewEmail } from './_lib/email.js';
import { todayInChicago } from './_lib/date.js';

function renderSms(firstName: string, link: string): string {
    // Non-clinical by design — no diagnosis, no treatment type.
    return `Hi ${firstName} — this is Life Balance in Oxford. Thanks for stopping in today. If you have a minute, a quick Google review means a lot: ${link}. Reply STOP to opt out.`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!requireCron(req)) {
        return res.status(401).json({ error: 'Not authorized.' });
    }

    const reviewLink = process.env.REVIEW_LINK;
    if (!reviewLink) {
        return res.status(500).json({ error: 'REVIEW_LINK env var missing.' });
    }

    const today = todayInChicago();
    const snap = await getDb()
        .collection(VISITS_COLLECTION)
        .where('visitDate', '==', today)
        .where('sent', '==', false)
        .get();

    const summary = {
        date: today,
        total: snap.size,
        smsSent: 0,
        smsSkipped: 0,
        smsOptedOut: 0,
        smsErrored: 0,
        emailSent: 0,
        emailSkipped: 0,
        emailErrored: 0,
    };

    await Promise.all(
        snap.docs.map(async (doc) => {
            const data = doc.data() as VisitRecord;

            let smsResult: ChannelResult = 'skipped';
            let smsError: string | null = null;
            if (data.consentSMS && data.phone) {
                const body = renderSms(data.firstName, reviewLink);
                const outcome = await sendSms(data.phone, body);
                smsResult = outcome.status;
                smsError = 'error' in outcome ? outcome.error : null;
                if (outcome.status === 'sent') summary.smsSent += 1;
                else if (outcome.status === 'opted_out') summary.smsOptedOut += 1;
                else summary.smsErrored += 1;
            } else {
                summary.smsSkipped += 1;
            }

            let emailResult: ChannelResult = 'skipped';
            let emailError: string | null = null;
            if (data.consentEmail && data.email) {
                const outcome = await sendReviewEmail({
                    toEmail: data.email,
                    firstName: data.firstName,
                    reviewLink,
                });
                emailResult = outcome.status;
                emailError = outcome.status === 'error' ? outcome.error : null;
                if (outcome.status === 'sent') summary.emailSent += 1;
                else summary.emailErrored += 1;
            } else {
                summary.emailSkipped += 1;
            }

            const update: Partial<VisitRecord> = {
                sent: true,
                sentAt: Timestamp.now(),
                smsResult,
                smsError,
                emailResult,
                emailError,
            };
            await doc.ref.update(update);
        }),
    );

    return res.status(200).json(summary);
}
