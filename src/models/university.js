const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: String,
  rank: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  acronym: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  motto: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
});

const University = mongoose.model('University', universitySchema);

module.exports = University;
