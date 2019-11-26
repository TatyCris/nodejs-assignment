const NATS = require('nats')

module.exports = {
    connect: () => {
        const nats = NATS.connect({ json: true })

        nats.on('connect', () => {
            console.log('NATS is online!')
        });

        nats.subscribe('vehicle test-bus-1', (msg) => {
            console.log('[Received] ' + msg)
        })
    }
}