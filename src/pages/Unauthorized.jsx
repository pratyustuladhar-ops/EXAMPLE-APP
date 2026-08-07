import { Link } from 'react-router-dom';
import { Card, Button } from '../components';

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md border border-slate-200 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Access denied</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">403</h1>
        <p className="mt-2 text-sm text-slate-600">You do not have permission to view this page.</p>
        <Link to="/dashboard" className="mt-6 inline-flex">
          <Button>Back to dashboard</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Unauthorized;
