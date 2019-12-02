require('dotenv').config()
const mongoose = require('mongoose')

const db = () => {
    const uri = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017'
    return mongoose.connect( uri, { 
        useNewUrlParser: true
    }, () => { console.log("Mongo is connected")}).catch(err => console.log(err))
}

module.exports =  db