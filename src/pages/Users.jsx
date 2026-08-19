import { useEffect, useState } from 'react';
import { Card, Table, RoleBadge } from '../components';
import MainLayout from '../layouts/MainLayout';
import { getUsers, updateUserRole, mockRoles } from '../services/mockData';
import { useAuth } from '../context/AuthContext';

const RolesSelect = ({ value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded border px-2 py-1 text-sm">
    {mockRoles.map((r) => (
      <option key={r.name} value={r.name.toLowerCase()}>{r.name}</option>
    ))}
  </select>
);

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user: current } = useAuth();

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleRoleChange = (uId, newRole) => {
    const updated = updateUserRole(uId, newRole);
    if (updated) {
      setUsers((prev) => prev.map((p) => (p.id === uId ? updated : p)));
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Users</h1>
          <p className="mt-1 text-sm text-slate-500">Manage staff accounts and see their assigned roles.</p>
        </div>

        <Card title="Team members" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={["Name", "Email", "Role"]}
            rows={users.map((u) => [
              u.name,
              u.email,
              current?.role === 'admin' ? (
                <RolesSelect key={u.id} value={u.role} onChange={(val) => handleRoleChange(u.id, val)} />
              ) : (
                <RoleBadge key={u.id} role={u.role} />
              ),
            ])}
            emptyMessage="No users available."
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default Users;
