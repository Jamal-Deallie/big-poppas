const mongoose = require("mongoose")
const dotenv = require('dotenv');

const DB = process.env.DATABASE

const connectDB = async () => {
    try {
        await mongoose
        .connect(DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(con => {
          console.log(con.connections);
          console.log('DB connection successful!');
        })
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB