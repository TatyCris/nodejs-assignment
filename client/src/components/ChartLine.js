import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

export default class ChartLine extends Component {
    y = []
    x = []
    render() {
        const {label, y, x} = this.props

        if (typeof this.props.x !== 'object' && typeof this.props.y !== 'object') {
            this.y = [...this.y, y]
            this.x = [...this.x, new Date(x).toLocaleTimeString()]
        } else {
            this.y = y
            this.x = x
        }
        const data = {
            labels: this.x,
            datasets: [
                {
                    label,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.y
                }
            ]
        };
        return (
            <div>
                <Line data={data} />
            </div>
        )
    }
}