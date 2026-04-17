import { SignJWT, jwtVerify } from 'jose';
import type { VercelRequest } from '@vercel/node';

const SESSION_HOURS = 8;

function secret(): Uint8Array {
    const s = process.env.JWT_SECRET;
    if (!s) throw new Error('JWT_SECRET env var missing.');
    return new TextEncoder().encode(s);
}

export function timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
}

export async function signSession(subject = 'admin'): Promise<string> {
    return await new SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setSubject(subject)
        .setIssuedAt()
        .setExpirationTime(`${SESSION_HOURS}h`)
        .sign(secret());
}

export async function verifySession(token: string): Promise<boolean> {
    try {
        const { payload } = await jwtVerify(token, secret());
        return payload.role === 'admin';
    } catch {
        return false;
    }
}

export async function requireAdmin(req: VercelRequest): Promise<boolean> {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) return false;
    const token = header.slice('Bearer '.length).trim();
    return await verifySession(token);
}

export function requireCron(req: VercelRequest): boolean {
    const expected = process.env.CRON_SECRET;
    if (!expected) return false;
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) return false;
    const token = header.slice('Bearer '.length).trim();
    return timingSafeEqual(token, expected);
}
