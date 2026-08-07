import { Card, Table } from '../components';
import MainLayout from '../layouts/MainLayout';
import { mockProducts } from '../services/mockData';

const Pos = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">POS</h1>
          <p className="mt-1 text-sm text-slate-500">Checkout workflow and product selection for the current role.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card title="Sell items" className="border border-slate-200 bg-white shadow-sm">
            <Table
              headers={['Product', 'Stock', 'Price']}
              rows={mockProducts.map((product) => [product.name, `${product.stock} units`, `$${product.price.toFixed(2)}`])}
              emptyMessage="No products to checkout."
            />
          </Card>

          <Card title="Current order" className="border border-slate-200 bg-white shadow-sm">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-3">Espresso Beans × 2</div>
              <div className="rounded-2xl bg-slate-50 p-3">Pastry Box × 1</div>
              <div className="rounded-2xl border border-slate-200 p-3 font-semibold text-slate-800">Subtotal: $31.00</div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pos;
