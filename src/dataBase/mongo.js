require('dotenv').config()

const mongoose = require('mongoose')
const vehicle = require('../rest-api/schemas/vehicle')

const db = () => {
    return mongoose.connect(process.env.DATABASE_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
}

const models = { vehicle }

module.exports = { models, db }