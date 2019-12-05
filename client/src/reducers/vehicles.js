import { SET_VEHICLES_DATA } from '../actions/vehicles'

const initialState = {
    vehicleData: []
}

export default function vehicleData(state = initialState, { type, payload }) {
    switch (type) {
        case SET_VEHICLES_DATA:
            return payload
        default:
            return state
    }
}