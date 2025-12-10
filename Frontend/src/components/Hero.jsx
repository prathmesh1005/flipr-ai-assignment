import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api/axios';

function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/api/contact', formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-purple-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <span className="text-4xl">⚡</span>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Brand
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero-section')}
                className="text-gray-700 hover:text-purple-600 font-semibold text-lg transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('projects-section')}
                className="text-gray-700 hover:text-purple-600 font-semibold text-lg transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('clients-section')}
                className="text-gray-700 hover:text-purple-600 font-semibold text-lg transition-colors duration-300 relative group"
              >
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <svg className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-purple-200/30 animate-fade-in-down">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <button
                  onClick={() => scrollToSection('hero-section')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 font-semibold rounded-lg transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('projects-section')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 font-semibold rounded-lg transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('clients-section')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 font-semibold rounded-lg transition-colors"
                >
                  Clients
                </button>
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="w-full text-left px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero-section" className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white py-16 md:py-24 px-4 min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium mb-4">
              🚀 Innovate. Evolve. Succeed.
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Build  <span className="text-orange-400">Success </span> With Innovation
            </h1>
            <p className="text-xl md:text-2xl text-purple-100/90 leading-relaxed max-w-2xl">
              We create innovative, scalable digital solutions that empower businesses to grow, streamline operations, and succeed with confidence in an ever-evolving technological landscape built for performance, impact, and long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">

              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            
          </div>

          <div 
            id="contact-form"
            className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Get a Free Consultation</h3>
              <p className="text-gray-500">Fill the form and we'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-base font-medium text-gray-700">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-base font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="mobile" className="text-base font-medium text-gray-700">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="city" className="text-base font-medium text-gray-700">Location</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center ${loading ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5'}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>Get Free Quote</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            <p className="mt-6 text-center text-base text-gray-500">
              <span className="inline-block px-3 py-1 bg-gray-50 rounded-full">
                🔒 100% Secure. We'll never share your details.
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
    </>
  );
}

export default Hero;
