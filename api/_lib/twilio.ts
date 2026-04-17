import twilio from 'twilio';

let client: ReturnType<typeof twilio> | null = null;

function getClient() {
    if (client) return client;
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    if (!sid || !token) throw new Error('TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN missing.');
    client = twilio(sid, token);
    return client;
}

export type SmsOutcome =
    | { status: 'sent'; sid: string }
    | { status: 'opted_out'; error: string }
    | { status: 'error'; error: string };

export async function sendSms(to: string, body: string): Promise<SmsOutcome> {
    const from = process.env.TWILIO_FROM_NUMBER;
    if (!from) return { status: 'error', error: 'TWILIO_FROM_NUMBER missing' };

    try {
        const msg = await getClient().messages.create({ to, from, body });
        return { status: 'sent', sid: msg.sid };
    } catch (err: unknown) {
        const e = err as { code?: number; message?: string };
        if (e.code === 21610) {
            return { status: 'opted_out', error: e.message ?? 'recipient has opted out' };
        }
        return { status: 'error', error: e.message ?? 'unknown twilio error' };
    }
}

export function normalizePhone(raw: string): string | null {
    const digits = raw.replace(/\D/g, '');
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    return null;
}
