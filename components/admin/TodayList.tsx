import React from 'react';

export type VisitRow = {
    id: string;
    firstName: string;
    phone: string | null;
    email: string | null;
    consentSMS: boolean;
    consentEmail: boolean;
    sent: boolean;
    sentAt: number | null;
    smsResult: 'sent' | 'skipped' | 'error' | 'opted_out' | null;
    smsError: string | null;
};

type Props = {
    rows: VisitRow[];
    onDelete: (id: string) => void;
};

function maskPhone(phone: string | null): string {
    if (!phone) return '—';
    const d = phone.replace(/\D/g, '').slice(-10);
    if (d.length !== 10) return '—';
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function maskEmail(email: string | null): string {
    if (!email) return '—';
    const [name, domain] = email.split('@');
    if (!domain) return email;
    const trimmed = name.length <= 2 ? name : `${name.slice(0, 2)}…`;
    return `${trimmed}@${domain}`;
}

function StatusPill({ row }: { row: VisitRow }) {
    if (!row.sent) {
        return (
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-slate-600 bg-slate-100 rounded">
                Queued
            </span>
        );
    }
    if (row.smsResult === 'sent') {
        return (
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-green-700 bg-green-50 rounded">
                Sent
            </span>
        );
    }
    if (row.smsResult === 'skipped') {
        return (
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-slate-500 bg-slate-100 rounded">
                Skipped
            </span>
        );
    }
    if (row.smsResult === 'opted_out') {
        return (
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-amber-700 bg-amber-50 rounded">
                Opted out
            </span>
        );
    }
    return (
        <span className="inline-block px-2 py-0.5 text-xs font-medium text-red-700 bg-red-50 rounded">
            Error
        </span>
    );
}

const TodayList: React.FC<Props> = ({ rows, onDelete }) => {
    if (rows.length === 0) {
        return (
            <div className="bg-white border border-stone-200 rounded-lg p-8 text-center text-slate-500">
                No visits logged yet today.
            </div>
        );
    }

    return (
        <div className="bg-white border border-stone-200 rounded-lg divide-y divide-stone-100">
            {rows.map((row) => (
                <div key={row.id} className="px-5 py-4 flex items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <p className="font-semibold text-slate-900">{row.firstName}</p>
                            <StatusPill row={row} />
                        </div>
                        <div className="text-sm text-slate-500 space-x-3">
                            {row.consentSMS && <span>SMS · {maskPhone(row.phone)}</span>}
                            {row.consentEmail && <span>Email · {maskEmail(row.email)}</span>}
                        </div>
                        {row.smsError && (
                            <p className="text-xs text-red-600 mt-1">{row.smsError}</p>
                        )}
                    </div>
                    {!row.sent && (
                        <button
                            onClick={() => onDelete(row.id)}
                            className="text-xs text-slate-400 hover:text-red-600 underline underline-offset-4"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodayList;
