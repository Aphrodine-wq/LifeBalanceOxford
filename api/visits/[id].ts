import type { VercelRequest, VercelResponse } from '@vercel/node';
import { requireAdmin } from '../_lib/auth.js';
import { getDb, VISITS_COLLECTION } from '../_lib/firebase.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!(await requireAdmin(req))) {
        return res.status(401).json({ error: 'Not authorized.' });
    }

    const id = typeof req.query.id === 'string' ? req.query.id : null;
    if (!id) return res.status(400).json({ error: 'Missing id.' });

    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const ref = getDb().collection(VISITS_COLLECTION).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return res.status(404).json({ error: 'Not found.' });

    const data = snap.data();
    if (data?.sent) {
        return res.status(400).json({
            error: 'Visit already sent — cannot delete. Contact support if you need this removed.',
        });
    }

    await ref.delete();
    return res.status(200).json({ ok: true });
}
