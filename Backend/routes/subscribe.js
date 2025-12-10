const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Subscriber = require('../models/Subscriber');

// POST /api/subscribe - Subscribe to newsletter (public)
router.post('/',
  [
    body('email').isEmail().withMessage('Valid email is required')
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email } = req.body;

      // Check if email already subscribed
      const existingSubscriber = await Subscriber.findOne({ email });
      if (existingSubscriber) {
        return res.status(400).json({ message: 'Email already subscribed' });
      }

      const subscriber = new Subscriber({ email });
      await subscriber.save();

      res.status(201).json({
        message: 'Subscribed successfully',
        subscriberId: subscriber._id
      });
    } catch (error) {
      console.error('Error saving subscriber:', error);
      res.status(500).json({ message: 'Failed to subscribe' });
    }
  }
);

module.exports = router;
