const express = require('express')
const router = express.Router()
const Vehicle = require('../schemas/vehicle')

router.get('/vehicleData', async (req, res) => {
    try {
        const vehicleData = await Vehicle.find()
        res.json(vehicleData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router