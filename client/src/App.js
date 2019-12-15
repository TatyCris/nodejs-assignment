import React, { Component } from 'react'
// import { Route } from "react-router-dom"
import './App.css'
// import Database from './components/Database'
import Websocket from './components/Websocket'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          {/* <Route exact path="/" component={} /> */}
          {/* <Database /> */}
          <Websocket />
        </main>
      </div>
    )
  }
}