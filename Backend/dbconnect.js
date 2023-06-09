var mongoose = require('mongoose')

const mongoURI = 'mongodb://127.0.0.1/Web_Blog';

const connecttomongo = async () => {
    mongoose.connect(mongoURI,
        console.log("Connected to Mongoose Successfully"));
}


module.exports = connecttomongo
