import * as request from 'superagent'
import { dataBaseUrl } from '../constants'
import React, { useState, useEffect } from "react"
import Graph from './Graph'

const Database = () => {
    const [hasError, setErrors] = useState(false)
    const [veiclesData, setVeiclesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await request(`${dataBaseUrl}/vehicles`)
                const data = res.body
                setVeiclesData(data)
            }
            catch (error) {
                setErrors(error)
            }
        }

        fetchData()
    })

    return (
        <div>
            <span>Database service</span>
            <Graph data={veiclesData} />
        </div>
    )
}

export default Database