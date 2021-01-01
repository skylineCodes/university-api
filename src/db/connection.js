import mongoose from 'mongoose';
import debug from '../config/debug';

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => debug.log('Database connection successful!'))
  .catch((err) => debug.log('Unable to connect to the mongodb instance. Error: ', err));
