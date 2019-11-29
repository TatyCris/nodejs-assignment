const mongoose = require('mongoose')
const request = require('supertest')
const app = require('./server')
const VehicleModel = require('../../dataBase/tests/vehicleSchemaTest')

const newVehicleData = new VehicleModel({
    _id: "5de10ccf1690810d278f7a74",
    time: 1511512585495,
    energy: 85.14600000000002,
    gps: ["52.08940124511719", "5.105764865875244"],
    odo: 5.381999999997788,
    speed: 12,
    soc: 88.00000000000007
})

// Testing get all vehicles endpoint
describe('GET /vehicles', () => {
    it('respond with json containing a list of all vehicles', async (done) => {
        request(app)
            .get('/vehicles')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Testing get a especific data endpoint by giving an id
describe('GET /:id', () => {
    beforeEach(async () => {
        VehicleModel.remove({}, (err) => { });
    });

    it('respond with json containing a single data object', async (done) => {
        const savedVehicle = await newVehicleData.save();

        request(app)
            .get('/5de10ccf1690810d278f7a74')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});