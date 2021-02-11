import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    acronym: {
      type: String,
      required: true,
      trim: true,
    },
    lecturer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Lecturer',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Course', courseSchema);
