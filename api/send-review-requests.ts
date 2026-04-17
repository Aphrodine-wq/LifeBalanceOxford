import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Timestamp } from 'firebase-admin/firestore';
import { requireCron } from './_lib/auth.js';
import { getDb, VISITS_COLLECTION, VisitRecord } from './_lib/firebase.js';
import { sendSms } from './_lib/twilio.js';
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
        sent: 0,
        skipped: 0,
        optedOut: 0,
        errored: 0,
    };

    await Promise.all(
        snap.docs.map(async (doc) => {
            const data = doc.data() as VisitRecord;

            if (!data.consentSMS || !data.phone) {
                await doc.ref.update({
                    sent: true,
                    sentAt: Timestamp.now(),
                    smsResult: 'skipped',
                });
                summary.skipped += 1;
                return;
            }

            const body = renderSms(data.firstName, reviewLink);
            const outcome = await sendSms(data.phone, body);

            const update: Partial<VisitRecord> = {
                sent: true,
                sentAt: Timestamp.now(),
                smsResult: outcome.status,
                smsError: 'error' in outcome ? outcome.error : null,
            };
            await doc.ref.update(update);

            if (outcome.status === 'sent') summary.sent += 1;
            else if (outcome.status === 'opted_out') summary.optedOut += 1;
            else summary.errored += 1;
        }),
    );

    return res.status(200).json(summary);
}
