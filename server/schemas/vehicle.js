const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
})

const vehicleData = mongoose.model("VehicleData", vehicleSchema)

module.exports = vehicleData