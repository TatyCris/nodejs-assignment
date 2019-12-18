import React, { useState, useEffect } from "react"
import WebSocket from 'isomorphic-ws'
import ChartBar from './ChartBar'
import { websocketUrl } from '../constants'
import ChartLine from "./ChartLine"
import Map from './Map'
import './styles.css'

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

    const renderChartBar = () => {
        return (
            <div className="chartBar">
                <div className="card">
                    <p className="chartTitle">Current Speed</p>
                    <ChartBar x={websocketData.speed} dataLegend={'km/h'} />
                </div>
                <div className="card">
                    <p className="chartTitle">State of Charge</p>
                    <ChartBar x={websocketData.soc} dataLegend={'%'} />
                </div>
                {renderNonChartInfoContainer()}
            </div>
        )
    }

    const renderChartLine = () => {
        return (
            <div className="chartLine">
                <div className="card">
                    <p className="chartTitle">Speed Profile</p>
                    <ChartLine yLabelString={'Speed (km/h)'} y={websocketData.speed} x={websocketData.time} />
                </div>
                <div className="card">
                    <p className="chartTitle">State of Charge Profile</p>
                    <ChartLine yLabelString={'SoC (%)'} y={websocketData.soc} x={websocketData.time} />
                </div>
            </div>
        )
    }

    const renderNonChartInfoContainer = () => {
        return (
            <div className="non-chart-info-container card">
                <div className="non-chart-info-box">
                    <p className="chartTitle">Energy</p>
                    <p className="chart-info">{websocketData.energy}</p>
                </div>
                <div className="non-chart-info-box">
                    <p className="chartTitle">Odometer</p>
                    <p className="chart-info">{websocketData.odo}</p>
                </div>
                <div className="non-chart-info-box">
                    <p className="chartTitle">Last Update</p>
                    {websocketData.time && <p className="chart-info">{new Date(websocketData.time).toLocaleString()}</p>}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="box">
                <div className="map-card">
                    <Map latitude={websocketData.gps && websocketData.gps[0]} longitude={websocketData.gps && websocketData.gps[1]} />
                </div>
                {renderChartBar()}
            </div>
            {renderChartLine()}
        </div>
    )
}

export default WebsocketApi