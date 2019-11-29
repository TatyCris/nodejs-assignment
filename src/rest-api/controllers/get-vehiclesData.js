const Vehicle = require('../../dataBase/schemas/vehicle')

const getVehiclesData = async (req, res) => {
    try {
        const vehiclesData = await Vehicle.find()
        res.json(vehiclesData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getVehiclesData }