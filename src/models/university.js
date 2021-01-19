import mongoose, { Schema } from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  acronym: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  viceChancellor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Lecturer',
  },
  deputyViceChancellor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Lecturer',
  },
  registrar: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Lecturer',
  },
  bursar: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Lecturer',
  },
  founded: {
    type: Number,
    required: true,
    trim: true,
  },
  motto: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    enum: ['federal', 'state', 'private'],
  },
  logoUrl: {
    type: String,
    required: true,
    trim: true,
  },
  websiteUrl: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model('University', universitySchema);
