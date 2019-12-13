import { websocketUrl } from '../constants'
import React, { useState, useEffect } from "react"
import Graph from './Graph'
const WebSocket = require('isomorphic-ws')

const WebsocketApi = () => {
    const [hasWebsocketError, setWebsocketErrors] = useState(false)
    const [websocketData, setWebsocketData] = useState([])

    const ws = new WebSocket(`${websocketUrl}/live`)

    ws.onopen = () => {
        ws.send('Open connection')
    }

    // connection.onerror = (error) => {
    //     console.log(error)
    // }

    ws.onmessage = (e) => {
        console.log(e.data)
        setWebsocketData(e.data)
    }

    return (
        <div>
            <span>Websocket service</span>
            {/* <Graph data={websocketData} /> */}
            {hasWebsocketError && <span>Has error: {hasWebsocketError}</span>}
            <span>{websocketData}</span>
        </div>
    )
}

export default WebsocketApi