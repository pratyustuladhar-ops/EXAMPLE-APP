export const roleLabels = {
  admin: 'Admin',
  supplier: 'Supplier',
  cashier: 'Cashier',
};

export const navigationItems = [
  { label: 'Dashboard', path: '/dashboard', roles: ['admin'] },
  { label: 'Products', path: '/products', roles: ['admin', 'supplier', 'cashier'] },
  { label: 'Suppliers', path: '/suppliers', roles: ['admin', 'supplier'] },
  { label: 'Users', path: '/users', roles: ['admin'] },
  { label: 'Roles', path: '/roles', roles: ['admin'] },
  { label: 'Permissions', path: '/permissions', roles: ['admin'] },
  { label: 'POS', path: '/pos', roles: ['admin', 'supplier', 'cashier'] },
  { label: 'Settings', path: '/settings', roles: ['admin'] },
];

export const getNavigationItems = (role) => {
  return navigationItems.filter((item) => item.roles.includes(role));
};

export const getRoleActions = (role) => ({
  canAddProduct: role === 'admin',
  canEditProduct: role === 'admin',
  canDeleteProduct: role === 'admin',
});
