// models/Certificate.js
const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
  },
  certificateData: {
    type: String,
    required: true,
  },
  issuedAt: {
    type: Date,
    default: Date.now,
  },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
