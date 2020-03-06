const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});