import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class ChartLine extends Component {
    y = []
    x = []
    render() {
        const {yLabelString, y, x} = this.props

        if (x === null || y === null) {
            console.log('null', x, y)
        } else {
            if (typeof this.props.x !== 'object' && typeof this.props.y !== 'object') {
                this.y = [...this.y, y]
                this.x = [...this.x, new Date(x).toLocaleTimeString()]
            } else {
                this.y = y
                this.x = x
            }
        }

        const data = {
            labels: this.x,
            datasets: [
                {
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(124, 163, 99, 0.4)',
                    borderColor: 'rgba(97, 126, 78, 1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(124, 163, 99, 1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.y,
                }
            ]
        }
        const options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        drawTicks: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        drawTicks: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: yLabelString
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
        return (
            <div className="chartLine-container">
                <Line data={data} height={170} width={900} options={options} />
            </div>
        )
    }
}