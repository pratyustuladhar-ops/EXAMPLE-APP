import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getNavigationItems, roleLabels } from '../utils/permissions';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const items = getNavigationItems(user?.role || 'cashier');

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-slate-200 bg-slate-900 px-5 py-6 text-slate-100">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">POS Hub</p>
        <h2 className="mt-2 text-2xl font-semibold">Inventory Suite</h2>
        <p className="mt-2 text-sm text-slate-400">Role-aware workspace for {roleLabels[user?.role] || 'users'}</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="mr-3 text-base">•</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-800/70 p-4">
        <p className="text-sm font-semibold text-white">Quick note</p>
        <p className="mt-2 text-sm text-slate-400">Use role-based access to keep operations organized and secure.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
