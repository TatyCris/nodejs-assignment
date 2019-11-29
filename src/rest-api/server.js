const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('../dataBase/mongo')
const vehicleDataRoutes = require('./routes/vehicleData')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send('API running!')
})

const port = process.env.PORT_REST_API || 7000
db().then(async () => {
    app.listen(port, (error) => {
        if (error) {
            throw new Error('Internal Server Error')
        }
        console.log(`Api listen on PORT: ${port}`)
    })
})

app.use(vehicleDataRoutes)