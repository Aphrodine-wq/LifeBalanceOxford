import React, { useEffect, useState } from 'react';

const TOKEN_KEY = 'lb_admin_token';

export function getStoredToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
}

type Props = {
    children: (token: string, logout: () => void) => React.ReactNode;
};

const AdminGate: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => getStoredToken());
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        document.title = 'Admin · Life Balance';
    }, []);

    async function login(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setBusy(true);
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? 'Login failed.');
                return;
            }
            localStorage.setItem(TOKEN_KEY, data.token);
            setToken(data.token);
            setPassword('');
        } catch {
            setError('Network error. Try again.');
        } finally {
            setBusy(false);
        }
    }

    function logout() {
        clearToken();
        setToken(null);
    }

    if (token) {
        return <>{children(token, logout)}</>;
    }

    return (
        <div className="min-h-screen bg-dark-green flex items-center justify-center px-6">
            <form
                onSubmit={login}
                className="w-full max-w-sm bg-white rounded-lg p-8 shadow-xl"
            >
                <h1 className="font-serif text-2xl text-slate-900 mb-1">Life Balance Admin</h1>
                <p className="text-sm text-slate-500 mb-6">Internal access only.</p>

                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-2 text-lg focus:border-dark-green focus:outline-none"
                    autoFocus
                    required
                />

                {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

                <button
                    type="submit"
                    disabled={busy}
                    className="mt-6 w-full bg-dark-green text-white font-semibold py-2.5 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {busy ? 'Signing in…' : 'Sign in'}
                </button>
            </form>
        </div>
    );
};

export default AdminGate;
