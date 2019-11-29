const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
})

module.exports = new mongoose.model("VehicleDataTest", vehicleSchemaTest)