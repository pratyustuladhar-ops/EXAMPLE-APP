import { Button, Card, Table } from '../components';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '../context/AuthContext';
import { mockProducts } from '../services/mockData';
import { getRoleActions } from '../utils/permissions';

const Products = () => {
  const { user } = useAuth();
  const actions = getRoleActions(user?.role || 'cashier');

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">Products</h1>
            <p className="mt-1 text-sm text-slate-500">View inventory and manage product actions based on role.</p>
          </div>
          {actions.canAddProduct && <Button>Add Product</Button>}
        </div>

        <Card title="Inventory list" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={['Name', 'Category', 'Stock', 'Price', actions.canEditProduct || actions.canDeleteProduct ? 'Actions' : '']}
            rows={mockProducts.map((product) => [
              product.name,
              product.category,
              `${product.stock} units`,
              `$${product.price.toFixed(2)}`,
              actions.canEditProduct || actions.canDeleteProduct ? (
                <div className="flex gap-2">
                  {actions.canEditProduct && <Button size="sm" variant="secondary">Edit</Button>}
                  {actions.canDeleteProduct && <Button size="sm" variant="secondary">Delete</Button>}
                </div>
              ) : '',
            ])}
            emptyMessage="No products available."
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default Products;
