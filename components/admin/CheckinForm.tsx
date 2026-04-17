import React, { useState } from 'react';

type Props = {
    token: string;
    onCreated: () => void;
};

const CheckinForm: React.FC<Props> = ({ token, onCreated }) => {
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [consentSMS, setConsentSMS] = useState(true);
    const [consentEmail, setConsentEmail] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [confirmation, setConfirmation] = useState<string | null>(null);

    function reset() {
        setFirstName('');
        setPhone('');
        setEmail('');
        setConsentSMS(true);
        setConsentEmail(false);
    }

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setConfirmation(null);

        if (!consentSMS && !consentEmail) {
            setError('Check at least one consent box — SMS or email.');
            return;
        }

        setBusy(true);
        try {
            const res = await fetch('/api/visits', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    phone: phone.trim() || undefined,
                    email: email.trim() || undefined,
                    consentSMS,
                    consentEmail,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? 'Could not log visit.');
                return;
            }
            setConfirmation(`${firstName.trim()} logged for today.`);
            reset();
            onCreated();
        } catch {
            setError('Network error. Try again.');
        } finally {
            setBusy(false);
        }
    }

    return (
        <form onSubmit={submit} className="bg-white border border-stone-200 rounded-lg p-6 space-y-5">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">First name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:border-dark-green focus:outline-none"
                    placeholder="First name only"
                    autoFocus
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:border-dark-green focus:outline-none"
                    placeholder="(662) 555-1234"
                />
                <label className="flex items-center gap-2 mt-2 text-sm text-slate-700">
                    <input
                        type="checkbox"
                        checked={consentSMS}
                        onChange={(e) => setConsentSMS(e.target.checked)}
                        className="h-4 w-4"
                    />
                    Patient consented to SMS at intake
                </label>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email (optional)</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:border-dark-green focus:outline-none"
                    placeholder="patient@example.com"
                />
                <label className="flex items-center gap-2 mt-2 text-sm text-slate-700">
                    <input
                        type="checkbox"
                        checked={consentEmail}
                        onChange={(e) => setConsentEmail(e.target.checked)}
                        className="h-4 w-4"
                    />
                    Patient consented to email at intake
                </label>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {confirmation && <p className="text-sm text-green-700">{confirmation}</p>}

            <button
                type="submit"
                disabled={busy}
                className="w-full bg-dark-green text-white font-semibold py-2.5 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {busy ? 'Saving…' : 'Log visit'}
            </button>
        </form>
    );
};

export default CheckinForm;
