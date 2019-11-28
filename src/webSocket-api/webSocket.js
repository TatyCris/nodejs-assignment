const WebSocket = require('ws')
const Vehicle = require('../rest-api/schemas/vehicle')

const connect = () => {
    const wss = new WebSocket.Server({ port: 8080 })

    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log(`Received message => ${message}`)
        })
    
        Vehicle
            .find()
            .then(res => {
                ws.send(JSON.stringify(res))
            }) 
    })
}

module.exports = connect
