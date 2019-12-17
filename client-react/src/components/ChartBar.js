import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

export default class ChartBar extends Component {
    render() {
        const { x, dataLegend } = this.props
        const data = {
            labels: [''],
            datasets: [
                {
                    label: dataLegend,
                    backgroundColor: 'rgb(124, 163, 99)',
                    borderColor: 'rgb(97, 126, 78)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(124, 163, 99)',
                    hoverBorderColor: 'rgb(97, 126, 78)',
                    data: [x, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                }
            ],
        }
        const options = {
            legend: {
                position: 'bottom',
                align: 'end',
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawTicks: false,
                    }
                }]
            },
        }
        return (
            <div className="chartBar-container">
                <HorizontalBar data={data} height={90} width={500} options={options} />
            </div>
        )
    }
}