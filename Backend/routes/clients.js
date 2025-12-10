const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// GET /api/clients - Fetch all clients (public)
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Failed to fetch clients' });
  }
});

module.exports = router;
