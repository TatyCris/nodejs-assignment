import React, { useState, useEffect } from "react"
import WebSocket from 'isomorphic-ws' 
import ChartBar from './ChartBar'
import { websocketUrl } from '../constants'
import ChartLine from "./ChartLine"

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
            <ChartBar x={websocketData.speed} barLabel={'Current Speed'} dataLegend={'km/h'} />
            <ChartBar x={websocketData.soc} barLabel={'State of Charge'} dataLegend={'%'} />
            <ChartLine label={'Speed Profile'} y={websocketData.speed} x={websocketData.time} />
            <ChartLine label={'State of Charge Profile'} y={websocketData.soc} x={websocketData.time} />
            {/* {hasWebsocketError && <span>Has error: {hasWebsocketError}</span>} */}
        </div>
    )
}

export default WebsocketApi