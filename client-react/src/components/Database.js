import React, { useState, useEffect } from "react"
import * as request from 'superagent'
import ChartLine from "./ChartLine"
import { dataBaseUrl } from '../constants'

const Database = () => {
    const [hasError, setErrors] = useState(false)
    const [vehiclesData, setVehiclesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await request(`${dataBaseUrl}/vehicles`)
                const data = res.body
                setVehiclesData(data)
            }
            catch (error) {
                setErrors(error)
            }
        }

        fetchData()
    }, [])

    const times = vehiclesData.map(res => new Date(res.time).toLocaleTimeString())
    const speeds = vehiclesData.map(res => res.speed)
    const statesOfCharge = vehiclesData.map(res => res.soc)

    return (
        <div>
            <span>Database service</span>
            <ChartLine label={'Speed Profile'} y={speeds} x={times} />
            <ChartLine label={'State of Charge Profile'} y={statesOfCharge} x={times} />
            {/* {hasError && <span>Has error: {JSON.stringify(hasError)}</span>} */}
        </div>
    )
}

export default Database