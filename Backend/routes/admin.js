const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const upload = require('../middlewares/upload');
const { processImage } = require('../middlewares/imageProcessor');
const { authenticateAdmin, generateAdminToken } = require('../middlewares/auth');
const Project = require('../models/Project');
const Client = require('../models/Client');
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

// Demo login endpoint (returns JWT token)
// In production, implement proper username/password authentication
router.post('/login', (req, res) => {
  const { password } = req.body;
  
  // Simple hardcoded password check (use proper auth in production)
  if (password === 'admin123') {
    const token = generateAdminToken();
    res.json({ token, message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// POST /api/admin/projects - Create new project (admin only)
router.post('/projects',
  authenticateAdmin,
  upload.single('image'),
  [
    body('name').trim().notEmpty().withMessage('Project name is required'),
    body('description').trim().notEmpty().withMessage('Description is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
      }

      // Process image (resize to 450x350)
      const processedPath = await processImage(req.file.path);
      const imageUrl = `/uploads/${processedPath.split('\\').pop().split('/').pop()}`;

      const project = new Project({
        name: req.body.name,
        description: req.body.description,
        imageUrl
      });

      await project.save();

      res.status(201).json({
        message: 'Project created successfully',
        project
      });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ message: 'Failed to create project' });
    }
  }
);

// POST /api/admin/clients - Create new client (admin only)
router.post('/clients',
  authenticateAdmin,
  upload.single('image'),
  [
    body('name').trim().notEmpty().withMessage('Client name is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('designation').trim().notEmpty().withMessage('Designation is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
      }

      // Process image (resize to 450x350)
      const processedPath = await processImage(req.file.path);
      const imageUrl = `/uploads/${processedPath.split('\\').pop().split('/').pop()}`;

      const client = new Client({
        name: req.body.name,
        description: req.body.description,
        designation: req.body.designation,
        imageUrl
      });

      await client.save();

      res.status(201).json({
        message: 'Client created successfully',
        client
      });
    } catch (error) {
      console.error('Error creating client:', error);
      res.status(500).json({ message: 'Failed to create client' });
    }
  }
);

// GET /api/admin/contacts - Fetch all contact submissions (admin only)
router.get('/contacts', authenticateAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
});

// GET /api/admin/subscribers - Fetch all subscribers (admin only)
router.get('/subscribers', authenticateAdmin, async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ message: 'Failed to fetch subscribers' });
  }
});

module.exports = router;
