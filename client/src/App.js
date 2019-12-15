import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Websocket from './components/Websocket'
import Database from './components/Database'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          <Route exact path="/database" component={Database} />
          <Route exact path="/websocket" component={Websocket} />
        </main>
      </div>
    )
  }
}