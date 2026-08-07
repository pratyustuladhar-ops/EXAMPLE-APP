import { Card, RoleBadge } from '../components';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '../context/AuthContext';
import { dashboardMetrics, recentActivity } from '../services/mockData';

const Dashboard = () => {
  const { user } = useAuth();
  const metrics = dashboardMetrics[user?.role] || dashboardMetrics.cashier;

  return (
    <MainLayout>
      <div className="space-y-6">
        <Card className="border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Welcome back</p>
              <h1 className="mt-2 text-3xl font-semibold">{user?.name || 'Staff member'}</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">Your workspace is tailored for {user?.role || 'cashier'} operations with mock data for inventory, sales and access control.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-sm text-slate-300">Current role</p>
              <div className="mt-2"><RoleBadge role={user?.role} /></div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((item) => (
            <Card key={item.title} className="border border-slate-200 bg-white shadow-sm">
              <p className="text-sm font-medium text-slate-500">{item.title}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card title="Recent activity" className="border border-slate-200 bg-white shadow-sm">
            <ul className="space-y-3">
              {recentActivity.map((item) => (
                <li key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Access summary" className="border border-slate-200 bg-white shadow-sm">
            <p className="text-sm text-slate-600">This mock dashboard demonstrates role-based navigation and action visibility. Admins can manage products, suppliers and users. Suppliers can view product data and supplier records. Cashiers can handle checkout and review inventory.</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
