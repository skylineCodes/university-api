import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database connection successful!');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Unable to connect to the mongodb instance. Error: ', err);
  });
