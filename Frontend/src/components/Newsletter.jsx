import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api/axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/api/subscribe', { email });
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
            <a href="#" className="relative group text-white/90 hover:text-white transition-colors font-medium">
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#" className="relative group text-white/90 hover:text-white transition-colors font-medium">
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#" className="relative group text-white/90 hover:text-white transition-colors font-medium">
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#" className="relative group text-white/90 hover:text-white transition-colors font-medium">
              <span className="relative">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a href="#" className="relative group text-white/90 hover:text-white transition-colors font-medium">
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>

          <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="relative w-full px-6 py-4 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <span>Get Updates</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
            <p className="mt-3 text-center lg:text-right text-purple-100 text-base">
              Subscribe to our newsletter for the latest updates and news.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
