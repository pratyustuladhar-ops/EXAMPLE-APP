import { useEffect, useState } from 'react';
import { Button, Card, Table, Modal, Input } from '../components';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '../context/AuthContext';
import { getRoleActions } from '../utils/permissions';
import { getProducts, saveProducts, getNextId } from '../services/storage';

const Products = () => {
  const { user } = useAuth();
  const actions = getRoleActions(user?.role || 'cashier');

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', barcode: '', category: '', price: '', stock: '', supplier: '', status: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(t);
  }, [message]);

  const openAdd = () => {
    setEditing(null);
    setForm({ name: '', barcode: '', category: '', price: '', stock: '', supplier: '', status: 'In Stock' });
    setErrors({});
    setIsOpen(true);
  };

  const openEdit = (product) => {
    setEditing(product.id);
    setForm({
      name: product.name || '',
      barcode: product.barcode || '',
      category: product.category || '',
      price: product.price != null ? String(product.price) : '',
      stock: product.stock != null ? String(product.stock) : '',
      supplier: product.supplier || '',
      status: product.status || '',
    });
    setErrors({});
    setIsOpen(true);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Product name is required.';
    if (!form.price || isNaN(Number(form.price))) e.price = 'Price must be a valid number.';
    if (!form.stock || isNaN(Number(form.stock))) e.stock = 'Stock must be a valid number.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const payload = {
      name: form.name.trim(),
      barcode: form.barcode.trim() || undefined,
      category: form.category.trim() || 'General',
      price: Number(form.price),
      stock: Number(form.stock),
      supplier: form.supplier.trim() || undefined,
      status: form.status || 'In Stock',
    };

    let updated;
    if (editing) {
      updated = products.map((p) => (p.id === editing ? { ...p, ...payload } : p));
      setProducts(updated);
      saveProducts(updated);
      setMessage('Product updated successfully.');
    } else {
      const id = getNextId(products);
      const newProduct = { id, ...payload };
      updated = [newProduct, ...products];
      setProducts(updated);
      saveProducts(updated);
      setMessage('Product added successfully.');
    }

    setIsOpen(false);
    setForm({ name: '', barcode: '', category: '', price: '', stock: '', supplier: '', status: '' });
    setEditing(null);
  };

  const handleDelete = (product) => {
    if (!window.confirm(`Delete product "${product.name}"? This cannot be undone.`)) return;
    const updated = products.filter((p) => p.id !== product.id);
    setProducts(updated);
    saveProducts(updated);
    setMessage('Product deleted.');
  };

  const filtered = products.filter((p) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (p.name || '').toLowerCase().includes(q) || (p.barcode || '').toLowerCase().includes(q);
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">Products</h1>
            <p className="mt-1 text-sm text-slate-500">View inventory and manage product actions based on role.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or barcode..."
              className="rounded-lg border px-3 py-2 text-sm"
            />
            {actions.canAddProduct && <Button onClick={openAdd}>Add Product</Button>}
          </div>
        </div>

        {message && <div className="rounded-md bg-green-50 border border-green-200 p-3 text-green-700">{message}</div>}

        <Card title="Inventory list" className="border border-slate-200 bg-white shadow-sm">
          <Table
            headers={['Name', 'Category', 'Stock', 'Price', actions.canEditProduct || actions.canDeleteProduct ? 'Actions' : '']}
            rows={filtered.map((product) => [
              product.name,
              product.category,
              `${product.stock} units`,
              `$${Number(product.price).toFixed(2)}`,
              actions.canEditProduct || actions.canDeleteProduct ? (
                <div className="flex gap-2">
                  {actions.canEditProduct && (
                    <Button size="sm" variant="secondary" onClick={() => openEdit(product)}>
                      Edit
                    </Button>
                  )}
                  {actions.canDeleteProduct && (
                    <Button size="sm" variant="secondary" onClick={() => handleDelete(product)}>
                      Delete
                    </Button>
                  )}
                </div>
              ) : (
                ''
              ),
            ])}
            emptyMessage="No products available."
          />
        </Card>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={editing ? 'Edit product' : 'Add product'}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} required />
              <Input label="Barcode" value={form.barcode} onChange={(e) => setForm({ ...form, barcode: e.target.value })} />
              <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <Input label="Supplier" value={form.supplier} onChange={(e) => setForm({ ...form, supplier: e.target.value })} />
              <Input label="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} error={errors.price} required />
              <Input label="Stock" type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} error={errors.stock} required />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{editing ? 'Save changes' : 'Add product'}</Button>
            </div>
          </form>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default Products;
