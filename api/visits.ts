import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Timestamp } from 'firebase-admin/firestore';
import { requireAdmin } from './_lib/auth.js';
import { getDb, VISITS_COLLECTION, VisitRecord } from './_lib/firebase.js';
import { normalizePhone } from './_lib/twilio.js';
import { daysFromNow, todayInChicago } from './_lib/date.js';

type CreateVisitBody = {
    firstName?: string;
    phone?: string;
    email?: string;
    consentSMS?: boolean;
    consentEmail?: boolean;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!(await requireAdmin(req))) {
        return res.status(401).json({ error: 'Not authorized.' });
    }

    if (req.method === 'POST') return createVisit(req, res);
    if (req.method === 'GET') return listToday(req, res);
    return res.status(405).json({ error: 'Method not allowed' });
}

async function createVisit(req: VercelRequest, res: VercelResponse) {
    const body = (req.body ?? {}) as CreateVisitBody;
    const firstName = (body.firstName ?? '').trim();
    if (!firstName) return res.status(400).json({ error: 'First name is required.' });

    const consentSMS = Boolean(body.consentSMS);
    const consentEmail = Boolean(body.consentEmail);

    if (!consentSMS && !consentEmail) {
        return res.status(400).json({
            error: 'At least one channel (SMS or email) must be consented.',
        });
    }

    let phone: string | null = null;
    if (consentSMS) {
        if (!body.phone) return res.status(400).json({ error: 'Phone required for SMS consent.' });
        phone = normalizePhone(body.phone);
        if (!phone) return res.status(400).json({ error: 'Phone must be a valid US number.' });
    }

    let email: string | null = null;
    if (consentEmail) {
        if (!body.email) return res.status(400).json({ error: 'Email required for email consent.' });
        const trimmed = body.email.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            return res.status(400).json({ error: 'Email looks invalid.' });
        }
        email = trimmed;
    }

    const record: Omit<VisitRecord, 'createdAt' | 'expireAt'> & {
        createdAt: FirebaseFirestore.FieldValue;
        expireAt: Timestamp;
    } = {
        firstName,
        phone,
        email,
        consentSMS,
        consentEmail,
        visitDate: todayInChicago(),
        createdAt: Timestamp.now(),
        sent: false,
        sentAt: null,
        smsResult: null,
        smsError: null,
        expireAt: Timestamp.fromDate(daysFromNow(30)),
    };

    const ref = await getDb().collection(VISITS_COLLECTION).add(record);
    return res.status(201).json({ id: ref.id, ...record });
}

async function listToday(_req: VercelRequest, res: VercelResponse) {
    const today = todayInChicago();
    const snap = await getDb()
        .collection(VISITS_COLLECTION)
        .where('visitDate', '==', today)
        .orderBy('createdAt', 'desc')
        .get();

    const rows = snap.docs.map((d) => {
        const data = d.data() as VisitRecord;
        return {
            id: d.id,
            firstName: data.firstName,
            phone: data.phone,
            email: data.email,
            consentSMS: data.consentSMS,
            consentEmail: data.consentEmail,
            sent: data.sent,
            sentAt: data.sentAt ? data.sentAt.toMillis() : null,
            smsResult: data.smsResult,
            smsError: data.smsError,
        };
    });

    return res.status(200).json({ today, rows });
}
