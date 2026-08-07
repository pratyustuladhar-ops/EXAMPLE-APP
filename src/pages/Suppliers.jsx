import { Card, Table } from '../components';
import MainLayout from '../layouts/MainLayout';
import { mockSuppliers } from '../services/mockData';

const Suppliers = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Suppliers</h1>
          <p className="mt-1 text-sm text-slate-500">Track vendor details and contact information in one place.</p>
        </div>

        <Card title="Supplier directory" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={['Supplier', 'Contact', 'Phone', 'Category']}
            rows={mockSuppliers.map((supplier) => [supplier.name, supplier.contact, supplier.phone, supplier.category])}
            emptyMessage="No supplier records available."
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default Suppliers;
