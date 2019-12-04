require('dotenv').config()
const WebSocket = require('ws')

const port = process.env.PORT_WEBSOCKET_API || 5000
const url = `http://localhost:${port}`
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client') 
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}