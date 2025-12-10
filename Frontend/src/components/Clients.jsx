import { useState, useEffect } from 'react';
import api from '../api/axios';

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await api.get('/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="clients-section" className="py-16 px-4 pb-30 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-3 text-gray-800">Happy Clients</h2>
          <p className="text-gray-600 max-w-3xl">
            Here's what our satisfied clients have to say about working with us
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl mb-4">No testimonials available yet.</p>
            <p className="text-gray-400 text-base">Client testimonials will appear here once added from the admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div key={client._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                  />
                </div>
                <p className="text-gray-600 text-base mb-4 leading-relaxed line-clamp-2 min-h-20">
                  {client.description}
                </p>
                <h4 className="font-bold text-lg text-purple-600 mb-1">{client.name}</h4>
                <p className="text-xs text-gray-500">{client.designation}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Clients;
