// routes/certificate.js
const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// Create a new certificate
router.post('/', async (req, res) => {
  try {
    const { recipientName, certificateData } = req.body;
    const certificate = new Certificate({
      recipientName,
      certificateData,
    });
    const savedCertificate = await certificate.save();
    res.json(savedCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a certificate.' });
  }
});

// Get all certificates
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificates.' });
  }
});

module.exports = router;
