import { roleLabels } from '../utils/permissions';

const RoleBadge = ({ role }) => {
  const styles = {
    admin: 'bg-emerald-100 text-emerald-700',
    supplier: 'bg-sky-100 text-sky-700',
    cashier: 'bg-amber-100 text-amber-700',
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[role] || 'bg-slate-100 text-slate-700'}`}>
      {roleLabels[role] || role}
    </span>
  );
};

export default RoleBadge;
