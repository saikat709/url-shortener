const mongoose = require('mongoose');

const startDBServer = async () => {
    console.log("Trying to connect to mongoose....");
    mongoose.connect(process.env.MONGOOSE_URL)
    .then( () => {
        console.log("Connected to mongoose.");
        console.log(process.env.MONGOOSE_URL);
    })
    .catch( (err) => {
        console.log("MONGOOSE Error: ", err);
    });
}

module.exports = startDBServer;