import mongoose from 'mongoose';
import debug from '../config/debug.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
};

export default connectDB;

// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// })
//   .then(() => debug.log('Database connection successful!'))
//   .catch((err) => debug.log('Unable to connect to the mongodb instance. Error: ', err.message));
