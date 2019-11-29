const mongoose = require('mongoose')

const vehicleSchemaTest = new mongoose.Schema({
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
})

module.exports = new mongoose.model("VehicleDataTest", vehicleSchemaTest)