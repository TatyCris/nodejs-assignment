require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const stream = require('./nats')
const db = require('../dataBase/mongo')
const Vehicle = require('../dataBase/schemas/vehicle')

const app = express()
app.use(cors())

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/', (req, res) => {
    res.status(200).send('Stream running!')
})

const port = process.env.PORT_STREAM_API || 4000

db().then(async () => {
    app.listen(port, (error) => {
        if (error) {
            throw new Error('Internal Server Error')
        }
        stream(Vehicle)
        console.log(`stream listen on PORT: ${port}`)
    })
})