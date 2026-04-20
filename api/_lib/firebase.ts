import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let db: Firestore | null = null;

export function getDb(): Firestore {
    if (db) return db;

    if (!getApps().length) {
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!projectId || !clientEmail || !privateKey) {
            throw new Error(
                'Firebase env vars missing. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY in Vercel.',
            );
        }

        initializeApp({
            credential: cert({ projectId, clientEmail, privateKey }),
        });
    }

    db = getFirestore();
    return db;
}

export type ChannelResult = 'sent' | 'skipped' | 'error' | 'opted_out' | null;

export type VisitRecord = {
    firstName: string;
    phone: string | null;
    email: string | null;
    consentSMS: boolean;
    consentEmail: boolean;
    visitDate: string; // YYYY-MM-DD in America/Chicago
    createdAt: FirebaseFirestore.Timestamp;
    sent: boolean;
    sentAt: FirebaseFirestore.Timestamp | null;
    smsResult: ChannelResult;
    smsError: string | null;
    emailResult: ChannelResult;
    emailError: string | null;
    expireAt: FirebaseFirestore.Timestamp;
};

export const VISITS_COLLECTION = 'visits';
