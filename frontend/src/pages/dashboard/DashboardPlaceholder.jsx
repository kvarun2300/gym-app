import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard } from 'lucide-react';
import logo from '../../assets/logo.jpeg';
import { useAuth } from '../../context/AuthContext';

/**
 * Minimal authenticated shell so the login → dashboard flow is fully functional
 * end-to-end. The real Admin/Trainer/Member dashboards (charts, tables, CRUD)
 * are built in the next phase — this confirms auth + routing works correctly.
 */
const DashboardPlaceholder = ({ roleLabel }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Xtreme Fitness" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-sm font-extrabold text-white">
            XTREME <span className="text-crimson-light">FITNESS</span>
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-white/70 hover:border-danger hover:text-danger"
        >
          <LogOut size={14} /> Logout
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="glass max-w-md p-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 text-crimson-light">
            <LayoutDashboard size={26} />
          </div>
          <p className="eyebrow mb-2 justify-center">{roleLabel} Dashboard</p>
          <h1 className="font-display text-2xl font-extrabold text-white">Welcome, {user?.name?.split(' ')[0]}!</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            You're securely logged in as a <span className="text-white">{user?.role}</span>. The full{' '}
            {roleLabel.toLowerCase()} dashboard — analytics, tables, and management tools — is the next
            build phase.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPlaceholder;
