const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact form (public)
router.post('/',
  [
    body('fullName').trim().notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('mobile').trim().notEmpty().withMessage('Mobile number is required'),
    body('city').trim().notEmpty().withMessage('City is required')
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { fullName, email, mobile, city } = req.body;

      const contact = new Contact({
        fullName,
        email,
        mobile,
        city
      });

      await contact.save();

      res.status(201).json({
        message: 'Contact saved successfully',
        contactId: contact._id
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ message: 'Failed to save contact' });
    }
  }
);

module.exports = router;
