export const mockProducts = [
  { id: 1, name: 'Espresso Beans', category: 'Coffee', stock: 48, price: 12.5, status: 'In Stock' },
  { id: 2, name: 'Cappuccino Cups', category: 'Ware', stock: 20, price: 8.2, status: 'Low' },
  { id: 3, name: 'Milk Frother', category: 'Equipment', stock: 7, price: 21.0, status: 'Low' },
  { id: 4, name: 'Pastry Box', category: 'Bakery', stock: 35, price: 6.8, status: 'In Stock' },
];

export const mockSuppliers = [
  { id: 1, name: 'Northstar Goods', contact: 'Asha', phone: '+1 555 0143', category: 'Coffee' },
  { id: 2, name: 'Blue Creek Supply', contact: 'Nadia', phone: '+1 555 0189', category: 'Bakery' },
  { id: 3, name: 'Urban Equip Co.', contact: 'Jason', phone: '+1 555 0177', category: 'Equipment' },
];

export const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@pos.com', role: 'admin' },
  { id: 2, name: 'Supplier Lead', email: 'supplier@pos.com', role: 'supplier' },
  { id: 3, name: 'Cashier Sam', email: 'cashier@pos.com', role: 'cashier' },
];

export const mockRoles = [
  { name: 'Admin', level: 'Full access', summary: 'Manage inventory, roles, permissions and settings.' },
  { name: 'Supplier', level: 'Limited access', summary: 'View inventory and manage supplier records.' },
  { name: 'Cashier', level: 'Checkout access', summary: 'Handle sales and view products.' },
];

export const dashboardMetrics = {
  admin: [
    { title: 'Sales Today', value: '$8,450', detail: '+14% vs yesterday' },
    { title: 'Products', value: '124', detail: '8 low stock alerts' },
    { title: 'Orders', value: '64', detail: '5 pending invoices' },
  ],
  supplier: [
    { title: 'Pending Restocks', value: '12', detail: '3 urgent supplies' },
    { title: 'Inventory View', value: '24', detail: 'Products ready to review' },
    { title: 'Delivery Notes', value: '5', detail: 'Track shipments today' },
  ],
  cashier: [
    { title: 'Open Tickets', value: '4', detail: '2 need checkout' },
    { title: 'Today’s Sales', value: '$1,260', detail: 'Fast checkout pace' },
    { title: 'Items in Queue', value: '9', detail: 'New orders entered' },
  ],
};

export const recentActivity = [
  { id: 1, title: 'New payment received', detail: 'Cashier completed checkout for 3 items' },
  { id: 2, title: 'Low stock warning', detail: 'Milk Frother is below the reorder point' },
  { id: 3, title: 'Supplier update', detail: 'Northstar Goods confirmed a delivery window' },
];
