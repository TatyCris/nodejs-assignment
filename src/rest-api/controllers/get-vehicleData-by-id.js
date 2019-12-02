const Vehicle = require('../schemas/vehicle')

const getVehicleDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const vehicleData = await Vehicle.findById(id)
        res.json(vehicleData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getVehicleDataById }