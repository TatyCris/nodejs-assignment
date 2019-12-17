import React, { useState, useEffect } from "react"
import WebSocket from 'isomorphic-ws' 
import ChartBar from './ChartBar'
import { websocketUrl } from '../constants'
import ChartLine from "./ChartLine"
import './websocket.css'

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
            {/* <span>Websocket service</span> */}
            <p className="chartTitle">Current Speed</p>
            <ChartBar x={websocketData.speed} chartTitle={'Current Speed'} dataLegend={'km/h'} />
            <p className="chartTitle">State of Charge</p>
            <ChartBar x={websocketData.soc} chartTitle={'State of Charge'} dataLegend={'%'} />
            <p className="chartTitle">Speed Profile</p>
            <ChartLine label={'Speed Profile'} y={websocketData.speed} x={websocketData.time} />
            <p className="chartTitle">State of Charge Profile</p>
            <ChartLine label={'State of Charge Profile'} y={websocketData.soc} x={websocketData.time} />
            {/* {hasWebsocketError && <span>Has error: {hasWebsocketError}</span>} */}
        </div>
    )
}

export default WebsocketApi