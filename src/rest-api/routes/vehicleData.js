const express = require('express')
const { getVehiclesData } = require('../controllers/get-vehiclesData')
const { getVehicleDataById } = require('../controllers/get-vehicleData-by-id')

const router = express.Router()

router.get('/vehicles', getVehiclesData)
router.get('/:id', getVehicleDataById)

module.exports = router