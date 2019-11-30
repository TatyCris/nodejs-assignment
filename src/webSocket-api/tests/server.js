const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const Vehicle = require('../../dataBase/tests/vehicleSchemaTest')
const db = require('../../dataBase/mongo')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const port = process.env.PORT_WEBSOCKET_API_TEST || 9000

app.get('/', (req, res) => {
    res.status(200).send('WebSocket test running!')
})

db().then(async () => {
    server.listen(port, (error) => {
        if (error) {
            throw new Error('Internal Server Error')
        }
        console.log(`WebSocket test listen on PORT: ${port}`)
        wss.on('connection', ws => {
            ws.on('message', message => {
                console.log(`SERVER SIDE - [Received] ${message}`)
            })

            Vehicle
                .find()
                .then(res => {
                    ws.send(JSON.stringify(res))
                })

            ws.send('WebSocket is connected!')
        })
    })
})

module.exports = app