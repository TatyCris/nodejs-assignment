const mongoose = require('mongoose');

const vehicleDataSchema = new mongoose.Schema({
    time: Number,
    energy: Number,
    gps: [],
    odo: Number,
    speed: Number,
    soc: Number
});

const vehicleData = mongoose.model("VehicleData", vehicleDataSchema);

module.exports = vehicleData; 