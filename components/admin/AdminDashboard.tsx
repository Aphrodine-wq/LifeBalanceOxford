import React, { useCallback, useEffect, useState } from 'react';
import CheckinForm from './CheckinForm';
import TodayList, { VisitRow } from './TodayList';
import { clearToken } from './AdminGate';

type Props = {
    token: string;
    onLogout: () => void;
};

const AdminDashboard: React.FC<Props> = ({ token, onLogout }) => {
    const [rows, setRows] = useState<VisitRow[]>([]);
    const [today, setToday] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const authHeader = { Authorization: `Bearer ${token}` };

    const refresh = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/visits', { headers: authHeader });
            if (res.status === 401) {
                clearToken();
                onLogout();
                return;
            }
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Failed to load');
            setRows(data.rows ?? []);
            setToday(data.today ?? '');
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [token, onLogout]);

    useEffect(() => {
        refresh();
    }, [refresh]);

    async function deleteVisit(id: string) {
        if (!confirm('Remove this visit? The patient will not be messaged today.')) return;
        const res = await fetch(`/api/visits/${id}`, {
            method: 'DELETE',
            headers: authHeader,
        });
        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            alert(data.error ?? 'Could not remove visit.');
            return;
        }
        refresh();
    }

    return (
        <div className="min-h-screen bg-[#faf7f1]">
            <header className="bg-dark-green text-white">
                <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div>
                        <p className="text-xs tracking-widest uppercase text-gold-accent">Life Balance · Admin</p>
                        <h1 className="font-serif text-xl mt-1">Patient check-in</h1>
                    </div>
                    <button
                        onClick={onLogout}
                        className="text-sm text-cream/80 hover:text-white underline underline-offset-4"
                    >
                        Sign out
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
                <section className="lg:col-span-2">
                    <h2 className="font-serif text-2xl text-slate-900 mb-1">Log a visit</h2>
                    <p className="text-sm text-slate-500 mb-6">
                        Fill this after checkout. The daily batch runs at 5:30 PM Central.
                    </p>
                    <CheckinForm token={token} onCreated={refresh} />
                </section>

                <section className="lg:col-span-3">
                    <div className="flex items-baseline justify-between mb-4">
                        <h2 className="font-serif text-2xl text-slate-900">Today{today ? ` — ${today}` : ''}</h2>
                        <button
                            onClick={refresh}
                            className="text-sm text-slate-500 hover:text-slate-900 underline underline-offset-4"
                        >
                            Refresh
                        </button>
                    </div>
                    {loading ? (
                        <p className="text-slate-500">Loading…</p>
                    ) : error ? (
                        <p className="text-red-600">{error}</p>
                    ) : (
                        <TodayList rows={rows} onDelete={deleteVisit} />
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
