import { Card, Table } from '../components';
import MainLayout from '../layouts/MainLayout';
import { mockRoles } from '../services/mockData';

const Roles = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Roles</h1>
          <p className="mt-1 text-sm text-slate-500">Review the available roles and their responsibilities.</p>
        </div>

        <Card title="Role library" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={['Role', 'Access Level', 'Summary']}
            rows={mockRoles.map((role) => [role.name, role.level, role.summary])}
            emptyMessage="No roles available."
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default Roles;
