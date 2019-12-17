import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
// import 'chartjs-plugin-datalabels'

export default class ChartBar extends Component {
    render() {
        const { x, chartTitle, dataLegend } = this.props
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

                    // barPercentage: 0.5,
                    // barThickness: 'flex',
                    // maxBarThickness: ,
                    // minBarLength: 1,
                }
            ],
        }
        const options = {
            legend: {
                position: 'bottom',
                align: 'end',
            },
            // title: {
            //     display: true,
            //     text: chartTitle,
            //     fontSize: 15,
            //     lineHeight: 2
            // },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        // drawBorder: false,
                        // offsetGridLines: true,
                        // color: 'red'
                    },
                    // display: false,
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        // color: 'green',
                        // offsetGridLines: false
                    },
                    // display: false,
                }]
            },
        }
        return (
            <div>
                {/* // <div style={{"height" : "600px", "width" : "600px"}}> */}
                <HorizontalBar data={data} height={90} width={500} options={options} />
            </div>
        )
    }
}