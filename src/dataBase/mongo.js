require('dotenv').config()
const mongoose = require('mongoose')

const db = () => {
    return mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017', { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
}

module.exports =  db