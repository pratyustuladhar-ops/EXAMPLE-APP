import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { ProtectedRoute } from '../components';
import {
  Dashboard,
  Login,
  Permissions,
  Pos,
  Products,
  Register,
  Roles,
  Settings,
  Suppliers,
  Unauthorized,
  Users,
} from '../pages';

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute allowedRoles={['admin', 'supplier', 'cashier']}><Products /></ProtectedRoute>} />
          <Route path="/suppliers" element={<ProtectedRoute allowedRoles={['admin', 'supplier']}><Suppliers /></ProtectedRoute>} />
          <Route path="/users" element={<ProtectedRoute allowedRoles={['admin']}><Users /></ProtectedRoute>} />
          <Route path="/roles" element={<ProtectedRoute allowedRoles={['admin']}><Roles /></ProtectedRoute>} />
          <Route path="/permissions" element={<ProtectedRoute allowedRoles={['admin']}><Permissions /></ProtectedRoute>} />
          <Route path="/pos" element={<ProtectedRoute allowedRoles={['admin', 'supplier', 'cashier']}><Pos /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute allowedRoles={['admin']}><Settings /></ProtectedRoute>} />

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
