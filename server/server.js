const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const stream = require('./stream')()
const { models, db } = require('./mongo')
const vehicleDataRoutes = require('./routes/vehicleData')

const app = express()
app.use(cors())

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/', (req, res) => {
    res.status(200).send('API running!')
})

const port = process.env.PORT || 4000
db().then(async () => {
    app.listen(port, (error) => {
        if (error) {
            throw new Error('Internal Server Error')
        }
        stream.connect(models.vehicle)
        console.log(`Listen on PORT: ${port}`)
    })
})

app.use(vehicleDataRoutes)