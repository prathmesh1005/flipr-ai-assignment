const Project = require('../models/Project');
const Client = require('../models/Client');
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

// These controllers are currently not used as logic is in routes
// But you can refactor route handlers here for better organization

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
};

// Add more controller functions as needed
