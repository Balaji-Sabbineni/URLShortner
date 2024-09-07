require('dotenv').config()
const mongoose = require('mongoose');

// const mongoUrl = "mongodb://localhost:27017/short-url";
const mongoUrl = process.env.MONGOURL;

const connection = mongoose.connect(process.env.MONGOURL)
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.log("Mongo connection error: ", err)
);

module.exports = connection;