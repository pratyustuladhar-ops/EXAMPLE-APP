import { Card, Table } from '../components';
import MainLayout from '../layouts/MainLayout';
import { mockUsers } from '../services/mockData';
import { RoleBadge } from '../components';

const Users = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Users</h1>
          <p className="mt-1 text-sm text-slate-500">Manage staff accounts and see their assigned roles.</p>
        </div>

        <Card title="Team members" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={['Name', 'Email', 'Role']}
            rows={mockUsers.map((user) => [user.name, user.email, <RoleBadge key={user.id} role={user.role} />])}
            emptyMessage="No users available."
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default Users;
