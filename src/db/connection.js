import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connection successful!'))
    .catch(function (err) {
        console.log('Unable to connect to the mongodb instance. Error: ', err);
    });
