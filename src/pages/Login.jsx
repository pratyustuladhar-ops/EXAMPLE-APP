import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Input } from '../components';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: 'admin@pos.com', password: '123456' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.email) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      nextErrors.password = 'Password is required';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage('');

    const result = login(formData.email, formData.password);

    setTimeout(() => {
      setLoading(false);
      if (result.success) {
        const targetPath = result.user.role === 'admin' ? '/dashboard' : '/pos';
        navigate(targetPath);
      } else {
        setMessage(result.message);
      }
    }, 400);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <Card className="w-full max-w-md border border-slate-200 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xl text-white">POS</div>
          <h2 className="text-2xl font-semibold text-slate-800">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-500">Use one of the mock accounts to explore the role-based dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
          {message && <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">{message}</p>}
          <Button type="submit" fullWidth disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
        </form>

        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-medium text-slate-700">Demo accounts</p>
          <ul className="mt-2 space-y-1">
            <li>Admin: admin@pos.com / 123456</li>
            <li>Supplier: supplier@pos.com / 123456</li>
            <li>Cashier: cashier@pos.com / 123456</li>
          </ul>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Need an account? <Link to="/register" className="font-semibold text-slate-700 hover:underline">Create one</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
