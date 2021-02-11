import mongoose from 'mongoose';
import debug from '../config/debug.js';

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    debug.log(`MongoDB connected: ${ conn.connection.host }`);
  } catch (e) {
    debug.error(`MongoDB connection error: ${ e.message }`);
    process.exit(1);
  }
};

export default connection;
