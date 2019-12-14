import { websocketUrl } from '../constants'
import React, { useState, useEffect } from "react"
import Graph from './Graph'
const WebSocket = require('isomorphic-ws')

const WebsocketApi = () => {
    const [hasWebsocketError, setWebsocketErrors] = useState(false)
    const [websocketData, setWebsocketData] = useState([])

    useEffect(() => {
        const ws = new WebSocket(`${websocketUrl}/live`)
        
        // ws.onopen = () => {
        //     ws.send('Open connection')
        // }

        ws.onmessage = (e) => {
            //e.data is a string of a data object {}
            // console.log(JSON.parse(e.data))
            // console.log('typeof e data', typeof JSON.parse(e.data), JSON.parse(e.data), JSON.parse(e.data).length )
            setWebsocketData(JSON.parse(e.data))
        }
        
        ws.onerror = (error) => {
            setWebsocketErrors('error: ' + error)
        }
    })

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