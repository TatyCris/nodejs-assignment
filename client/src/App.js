import React, { Component } from 'react'
// import { Route } from "react-router-dom"
import './App.css'
// import Database from './components/Database'
// import Websocket from './components/Websocket'
import BarChart from './components/Chart'
import ChartBar from './components/ChartBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          {/* <Route exact path="/" component={} /> */}
          {/* <Database /> */}
          {/* <Websocket /> */}
          {/* <BarChart /> */}
          <ChartBar />
        </main>
      </div>
    )
  }
}