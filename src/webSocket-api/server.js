const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const Vehicle = require('./schemas/vehicles')
const db = require('./mongo')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const port = process.env.PORT_WEBSOCKET_API || 5000

app.get('/', (req, res) => {
    res.status(200).send('WebSocket running!')
})

app.get('/live', (req, res) => {
    let live = `
    const socket = new WebSocket('ws://localhost:5000')
    socket.onopen = () => {
        Vehicle
            .watch()
            .on('change', change => {
                socket.send(JSON.stringify(change.fullDocument))
            })
    }`
    res.set('Content-Type', 'application/javascript')
    res.status(200).send(live)
})

db().then(async () => {
    server.listen(port, (error) => {
        if (error) {
            throw new Error('Internal Server Error')
        }
        console.log(`WebSocket listen on PORT: ${port}`)
        wss.on('connection', ws => {
            ws.on('message', message => {
                console.log(`SERVER SIDE - [Received] ${message}`)
            })

            Vehicle
                .find()
                .then(res => {
                    ws.send(JSON.stringify(res))
                })

            Vehicle
                .watch()
                .on('change', change => {
                    ws.send(JSON.stringify(change.fullDocument))
                })
        })
    })
})