import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Websocket from './components/Websocket'
import Database from './components/Database'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <menu className="App-menu">
          <img className="ham-menu-icon" src="ham-menu.png" alt="hamburguer-menu-icon" />
        </menu>
        <main className="App-main">
          <Route exact path="/database" component={Database} />
          <Route exact path="/websocket" component={Websocket} />
        </main>
      </div>
    )
  }
}