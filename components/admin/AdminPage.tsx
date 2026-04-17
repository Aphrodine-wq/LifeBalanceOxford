import React from 'react';
import AdminGate from './AdminGate';
import AdminDashboard from './AdminDashboard';

const AdminPage: React.FC = () => {
    return (
        <AdminGate>
            {(token, logout) => <AdminDashboard token={token} onLogout={logout} />}
        </AdminGate>
    );
};

export default AdminPage;
