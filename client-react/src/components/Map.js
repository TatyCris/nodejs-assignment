import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const Map = ({ latitude, longitude }) => {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 52.3740311,
        longitude: 4.8896899,
        zoom: 8
    })

    useEffect(() => {
        console.log('gps', latitude, longitude);
        if (latitude || longitude) {
            setViewport({ ...viewport, latitude, longitude })
        }
    }, [latitude, longitude])

    const token = process.env.REACT_APP_MAPBOX_API_KEY || "pk.eyJ1IjoidGF0eWNyaXMiLCJhIjoiY2syNmdlcnZqMWRkNzNkbXE1OWVqcjhrNiJ9.qsi-EJjOzbbLfgqaLXDBdA"

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={token}
            mapStyle='mapbox://styles/mapbox/streets-v11'
        >
            {latitude && longitude ?
                <Marker
                    latitude={latitude}
                    longitude={longitude}
                >
                    <img className="pin-icon" src="pinIcon.png" alt="pin-icon" />
                </Marker>
                : null
            }
        </ReactMapGL>

    )
}

export default Map