import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis'
import './Graph.css'

export default class Graph extends Component {
  render() {
    const dataXY = this.props.data.map(res => {
      if (res.time < 1.5) {
        // console.log('time error', res)
      }
      return {
        x: res.time,
        y: res.speed
      }
    })
    // console.log('props', dataXY)
    return (
      <XYPlot
        width={800}
        height={300}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="X" />
        <YAxis title="Y" />
        <LineSeries
          data={dataXY}
          style={{ strokeWidth: 2 }}
        />
      </XYPlot>
    )
  }
}