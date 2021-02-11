import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  acronym: {
    type: String,
    required: true,
    trim: true,
  },
  founded: {
    type: String,
    required: true,
    trim: true,
  },
  history: {
    type: String,
    required: true,
    trim: true,
  },
  hod: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Lecturer',
  },
  lecturers: [
      {
        lecturer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Lecturer',
        }
      }
    ],
  courses: [
      {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Course',
        }
      }
  ],
},
{
timestamps: true,
});

// Set Object and Json property to true. Default is set to false
departmentSchema.set('toObject', { virtuals: true });
departmentSchema.set('toJSON', { virtuals: true });

export default mongoose.model('Department', departmentSchema);
