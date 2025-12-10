const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - Fetch all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

module.exports = router;
