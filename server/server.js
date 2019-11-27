const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const stream = require('./stream')
const { models, db } = require('./mongo')
const vehicleDataRoutes = require('./routes/vehicleData')
const webSocket = require('./webSocket')

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
        stream(models.vehicle)
        console.log(`Listen on PORT: ${port}`)
    })
})

app.use(vehicleDataRoutes)
// webSocket()
// app.use(webSocket)

/////





// const url = 'wss://localhost:8080'
// const connection = new WebSocket(url)
// // const socket = new WebSocket('ws://localhost:8080');


// connection.onopen = () => {
//   connection.send('hey') 
// }

// connection.onerror = (error) => {
//   console.log(`WebSocket error: ${error}`)
// }

// connection.onmessage = (e) => {
//   console.log(e.data)
// }