import React, { useState, useEffect } from "react"
import WebSocket from 'isomorphic-ws' 
import ChartBar from './ChartBar'
import { websocketUrl } from '../constants'

const WebsocketApi = () => {
    const [hasWebsocketError, setWebsocketErrors] = useState(false)
    const [websocketData, setWebsocketData] = useState([])

    useEffect(() => {
        const ws = new WebSocket(`${websocketUrl}/live`)
        
        ws.onopen = () => {
            ws.send('Open connection')
        }

        ws.onmessage = (e) => {
            setWebsocketData(JSON.parse(e.data))
        }
        
        ws.onerror = (error) => {
            setWebsocketErrors('error: ' + error)
        }
    }, [])

    return (
        <div>
            <span>Websocket service</span>
            <ChartBar currentSpeed={websocketData.speed} barLabel={'Current Speed'} dataLegend={'km/h'} />
            {/* {hasWebsocketError && <span>Has error: {hasWebsocketError}</span>} */}
        </div>
    )
}

export default WebsocketApi