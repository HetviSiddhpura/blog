const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://hetvisiddhpura0403:AT06TXEyp8TdcAOa@cluster0.frnsuxu.mongodb.net/blog999?retryWrites=true&w=majority&appName=Cluster0"
    // Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

