import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis'
import './Graph.css'

export default class Graph extends Component {
  render() {
    const dataXY = this.props.data.map(res => {
      if (res.time === null) {
        // console.log('error data', res)
      }
      return {
        x: res.time,
        y: res.speed
      }
    })

    return (
      <XYPlot
        width={1000}
        height={300}
        xType="time"
        title="database service"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="h"/>
        <YAxis title="km/h" />
        <LineSeries
          data={dataXY}
          style={{ strokeWidth: 2 }}
        />
      </XYPlot>
    )
  }
}