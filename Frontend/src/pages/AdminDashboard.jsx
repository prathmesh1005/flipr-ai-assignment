import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/axios';
import AddProjectForm from '../components/admin/AddProjectForm';
import AddClientForm from '../components/admin/AddClientForm';
import ContactsList from '../components/admin/ContactsList';
import SubscribersList from '../components/admin/SubscribersList';

const ADMIN_TOKEN_KEY = 'adminToken';
const DEFAULT_TAB = 'projects';

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects', icon: '📊' },
  { id: 'clients', label: 'Clients', icon: '⚙️' },
  { id: 'contacts', label: 'Contacts', icon: '📄' },
  { id: 'subscribers', label: 'Subscribers', icon: 'ℹ️' }
];

function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(ADMIN_TOKEN_KEY);
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  const setAuthToken = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const clearAuth = () => {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    delete api.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    setActiveTab(DEFAULT_TAB);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post('/api/admin/login', { password });
      const { token } = data;
      
      localStorage.setItem(ADMIN_TOKEN_KEY, token);
      setAuthToken(token);
      setIsAuthenticated(true);
      setPassword('');
      
      toast.success('Login successful');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Invalid credentials';
      toast.error(errorMessage);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearAuth();
    toast.success('Logged out successfully');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <h2 className="text-4xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="input-field mb-4"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-base text-gray-500 mt-4 text-center">
              Demo password: admin123
            </p>
          </form>
          <button
            onClick={() => navigate('/')}
            className="w-full mt-4 text-primary hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderNavButton = (item) => {
    const isActive = activeTab === item.id;
    const buttonClass = `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
      isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`;

    return (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id)}
        className={buttonClass}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="text-xl" aria-hidden="true">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    );
  };

  const renderContent = () => {
    const contentMap = {
      projects: { title: 'Add Project', Component: AddProjectForm },
      clients: { title: 'Add Client', Component: AddClientForm },
      contacts: { title: 'Contact Submissions', Component: ContactsList },
      subscribers: { title: 'Newsletter Subscribers', Component: SubscribersList }
    };

    const { title, Component } = contentMap[activeTab] || contentMap.projects;

    return (
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <Component />
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <span className="text-yellow-400 text-2xl" aria-hidden="true">⚡</span>
          <span className="text-2xl font-bold">DASHBOARD</span>
        </div>
        
        <nav className="flex-1 px-4" role="navigation" aria-label="Main navigation">
          {NAV_ITEMS.map(renderNavButton)}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6" role="main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
