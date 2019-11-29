const express = require('express')
const Vehicle = require('../../dataBase/tests/vehicleSchemaTest')

const router = express.Router()

router.get('/vehicles', async (req, res) => {
    try {
        const vehiclesData = await Vehicle.find()
        res.json(vehiclesData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const vehicleData = await Vehicle.findById(id)
        res.json(vehicleData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router