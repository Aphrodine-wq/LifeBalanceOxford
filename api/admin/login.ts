import type { VercelRequest, VercelResponse } from '@vercel/node';
import { signSession, timingSafeEqual } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) {
        return res.status(500).json({ error: 'Server misconfigured.' });
    }

    const { password } = (req.body ?? {}) as { password?: string };
    if (!password || typeof password !== 'string') {
        return res.status(400).json({ error: 'Password required.' });
    }

    if (!timingSafeEqual(password, expected)) {
        // Small delay to slow brute force attempts.
        await new Promise((r) => setTimeout(r, 600));
        return res.status(401).json({ error: 'Incorrect password.' });
    }

    const token = await signSession();
    return res.status(200).json({ token });
}
