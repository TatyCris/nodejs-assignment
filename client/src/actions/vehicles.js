import * as request from 'superagent'
import { dataBaseUrl } from '../constants'

export const SET_VEHICLES_DATA = 'GET_VEHICLES'

export function getVehicles() {
    return async function (dispatch) {
        try {
            const response = await request(`${dataBaseUrl}/vehicles`)
            const data = JSON.parse(response.text)
            console.log('Data', data)
            dispatch(setVehiclesData(data))
        }
        catch (error) {
            console.error(error)
        }
    }
}

export function setVehiclesData(data) {
    return {
        type: SET_VEHICLES_DATA,
        payload: data
    }
}