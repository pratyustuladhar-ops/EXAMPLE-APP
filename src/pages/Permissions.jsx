import { Card } from '../components';
import MainLayout from '../layouts/MainLayout';

const Permissions = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Permissions</h1>
          <p className="mt-1 text-sm text-slate-500">This mock page shows how feature access can be governed by role.</p>
        </div>

        <Card title="Permission map" className="border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">Admin</p>
              <p className="mt-2 text-sm text-slate-500">Full system access including products, suppliers, users, roles and settings.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">Supplier</p>
              <p className="mt-2 text-sm text-slate-500">Can review supplier and inventory information, but only view products.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-800">Cashier</p>
              <p className="mt-2 text-sm text-slate-500">Can work in the POS and review products in read-only mode.</p>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Permissions;
