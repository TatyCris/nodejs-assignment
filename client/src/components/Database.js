import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { getVehicles } from '../actions/vehicles'
import CanvasGraph from './Graph'

class Database extends Component {
    componentDidMount() {
        this.props.getVehicles()
    }

    render() {
        return (
            <div>
                Hello World!!!
                <CanvasGraph />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { getVehicles })(Database)