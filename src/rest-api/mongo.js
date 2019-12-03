require('dotenv').config()
const mongoose = require('mongoose')

// const uri = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017' //
const uri = 'mongodb://mongo:27017/vehicles' //connect to the mongo container exposed port 27017

const db = () => {
    return mongoose
        .connect(
            uri,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("Mongo is connected"))
        .catch(err => console.log(err))
}

module.exports = db