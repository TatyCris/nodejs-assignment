import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

export default class ChartBar extends Component {
    render() {
        const {x, barLabel, dataLegend} = this.props
        const data = {
            labels: [barLabel],
            datasets: [
                {
                    label: dataLegend,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [x, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                }
            ]
        }
        return (
            <div>
                <HorizontalBar data={data} />
            </div>
        )
    }
}