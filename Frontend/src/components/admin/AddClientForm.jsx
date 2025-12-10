import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../api/axios';

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
  designation: '',
  image: null
};

function AddClientForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image' && files?.[0]) {
      const file = files[0];
      setFormData(prev => ({ ...prev, image: file }));
      createImagePreview(file);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const createImagePreview = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('designation', formData.designation);
      formDataToSend.append('image', formData.image);

      await api.post('/api/admin/clients', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Client testimonial created successfully!');
      resetForm();
      e.target.reset();
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create client';
      toast.error(errorMessage);
      console.error('Client creation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Client Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter client name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-700 mb-2">
              Designation *
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g., CEO at Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Testimonial *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Client's testimonial or feedback..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">
            Client Photo *
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            required
          />
          {preview && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg inline-block">
              <p className="text-base font-semibold text-gray-700 mb-3">Photo Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </span>
            ) : (
              'Create Client Testimonial'
            )}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClientForm;
