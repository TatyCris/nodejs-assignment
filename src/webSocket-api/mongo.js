require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.DATABASE_URL || 'mongodb://mongo:27017/vehicles' //

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