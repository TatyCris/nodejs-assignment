const NATS = require('nats')

module.exports = () => {
    const connect = (vehicleModel) => {
        const nats = NATS.connect({ json: true })

        nats.on('connect', () => {
            console.log('NATS is online!')
        })

        nats.subscribe('vehicle.test-bus-1', (data) => {
            console.log('Data', data)
            addToDatabase(data)
        })

        const addToDatabase = async (data) => {
			const vehicleData = vehicleModel({
				time: data.time,
				energy: data.energy,
				gps: data.gps,
				odo: data.odo,
				speed: data.speed,
				soc: data.soc
			})
			await vehicleData.save()
		}
    }
    return { connect }
}