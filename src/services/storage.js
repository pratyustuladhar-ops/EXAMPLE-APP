import { mockProducts, mockSuppliers, mockUsers } from './mockData';

const LS_KEYS = {
  products: 'pos_products_v1',
  suppliers: 'pos_suppliers_v1',
  users: 'pos_users_v1',
  customers: 'pos_customers_v1',
  cart: 'pos_cart_v1',
};

const read = (key) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

export const getProducts = () => read(LS_KEYS.products) || mockProducts;
export const saveProducts = (products) => write(LS_KEYS.products, products);

export const getSuppliers = () => read(LS_KEYS.suppliers) || mockSuppliers;
export const saveSuppliers = (suppliers) => write(LS_KEYS.suppliers, suppliers);

export const getUsers = () => read(LS_KEYS.users) || mockUsers;
export const saveUsers = (users) => write(LS_KEYS.users, users);

export const getCustomers = () => read(LS_KEYS.customers) || [];
export const saveCustomers = (customers) => write(LS_KEYS.customers, customers);

export const getCart = () => read(LS_KEYS.cart) || [];
export const saveCart = (cart) => write(LS_KEYS.cart, cart);

export const getNextId = (items) => {
  if (!items || !items.length) return 1;
  return Math.max(...items.map((i) => i.id || 0)) + 1;
};

export default {
  getProducts,
  saveProducts,
  getSuppliers,
  saveSuppliers,
  getUsers,
  saveUsers,
  getCustomers,
  saveCustomers,
  getCart,
  saveCart,
  getNextId,
};
