import { Card } from '../components';
import MainLayout from '../layouts/MainLayout';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Settings</h1>
          <p className="mt-1 text-sm text-slate-500">Configure the mock POS experience for your business.</p>
        </div>

        <Card title="Workspace preferences" className="border border-slate-200 bg-white shadow-sm">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 p-3">Store name: Northwind POS</div>
            <div className="rounded-2xl border border-slate-200 p-3">Currency: USD</div>
            <div className="rounded-2xl border border-slate-200 p-3">Theme: Admin Dashboard</div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
