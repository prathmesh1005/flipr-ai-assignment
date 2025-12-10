import { useState, useEffect } from 'react';
import api from '../../api/axios';

function SubscribersList() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await api.get('/api/admin/subscribers');
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      {subscribers.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-7xl mb-4">📧</div>
          <p className="text-gray-500 text-xl">No newsletter subscribers yet.</p>
          <p className="text-gray-400 text-base mt-2">Subscribers will appear here once users sign up for the newsletter.</p>
        </div>
      ) : (
        <div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold text-gray-800">Total Newsletter Subscribers</p>
                <p className="text-sm text-gray-600">Active email subscribers</p>
              </div>
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-2xl">
              {subscribers.length}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email Address
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Subscribed Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber._id} className={`hover:bg-green-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-600">{index + 1}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">📧</span>
                          <div className="text-sm font-medium text-gray-900">{subscriber.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{formatDate(subscriber.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubscribersList;
