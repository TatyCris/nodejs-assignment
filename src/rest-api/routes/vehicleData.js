const express = require('express')
const { getVehiclesData } = require('../controllers/get-vehiclesData')

const router = express.Router()

router.get('/vehicleData', getVehiclesData)

module.exports = router