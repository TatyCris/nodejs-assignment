// import React, { Component } from 'react'
// // var BarChart = require("react-chartjs").Bar;
// import { BarChart } from 'react-chartjs';
// // import Chart from 'chart.js';

// // var MyComponent = React.createClass({
// //     render: function () {
// //         return <BarChart data={chartData} options={chartOptions} />
// //     }
// // });

// export default class Chart extends Component {


//     render() {
//         const chartData = [
//             {
//                 "name": "A",
//                 "value": 46
//             },
//             {
//                 "name": "B",
//                 "value": 87
//             }
//         ]

//         return (
//             <div>
//                 {/* <BarChart data={chartData} options={chartOptions} width="600" height="250" /> */}
//                 Hello World!
//                 <BarChart
//                     data={chartData}
//                     title="My amazing data"
//                     color="#70CAD1"
//                 />
//             </div>
//         )
//     }
// }

import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}




export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}