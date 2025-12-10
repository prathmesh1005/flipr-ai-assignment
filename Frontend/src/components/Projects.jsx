import { useState, useEffect } from 'react';
import api from '../api/axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects-section" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center relative z-10">
          <div className="inline-block bg-purple-100 text-purple-800 text-base font-medium px-4 py-1.5 rounded-full mb-4">
            Our Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Our <span className="text-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-xl">
            Explore our portfolio of successful projects that showcase our expertise
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl mb-4">No projects available yet.</p>
            <p className="text-gray-400 text-base">Projects will appear here once added from the admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {projects.map((project) => (
              <div key={project._id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="overflow-hidden h-52 bg-gray-100 relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-base mb-6 line-clamp-2">{project.description}</p>
                  <button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-2.5 px-8 rounded-lg transition-all duration-300 group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
