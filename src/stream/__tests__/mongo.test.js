const mongoose = require('mongoose')
const VehicleModel = require('../schemas/vehicle')

const vehicleData = {
    time: 1511512585495,
    energy: 85.14600000000002,
    gps: ["52.08940124511719", "5.105764865875244"],
    odo: 5.381999999997788,
    speed: 12,
    soc: 88.00000000000007
}

describe('Vehicle Model Test', () => {

    beforeAll(async (done) => {
        await mongoose.connect('mongodb://127.0.0.1:27030/tests', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
        done();
    });

    // Test Schema
    it('create & save vehicle data successfully', async (done) => {
        const validVehicle = new VehicleModel(vehicleData);
        const savedVehicle = await validVehicle.save();
        expect(savedVehicle._id).toBeDefined();
        expect(savedVehicle.time).toBe(vehicleData.time);
        expect(savedVehicle.energy).toBe(vehicleData.energy);
        expect(savedVehicle.gps).toEqual(expect.arrayContaining(vehicleData.gps));
        expect(savedVehicle.odo).toBe(vehicleData.odo);
        expect(savedVehicle.speed).toBe(vehicleData.speed);
        expect(savedVehicle.soc).toBe(vehicleData.soc);
        done();
    });

    // Test Validation
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert vehicle data successfully, but the field does not defined in schema should be undefined', async (done) => {
        const vehicleWithInvalidField = new VehicleModel({
            vehicle: 'test-bus-1',
            time: 1511512585495,
            energy: 85.14600000000002,
            gps: ["52.08940124511719", "5.105764865875244"],
            odo: 5.381999999997788,
            speed: 12,
            soc: 88.00000000000007
        });
        const savedVehicleWithInvalidField = await vehicleWithInvalidField.save();
        expect(savedVehicleWithInvalidField._id).toBeDefined();
        expect(savedVehicleWithInvalidField.nickkname).toBeUndefined();
        done();
    });
})