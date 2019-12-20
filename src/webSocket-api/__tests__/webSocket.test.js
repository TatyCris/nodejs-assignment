const WebSocket = require('ws')

describe('app', () => {
    it('connect websockets response', async (done) => {
        const url = 'http://localhost:5000/live'
        const connection = new WebSocket(url)

        connection.on('open', () => {
            connection.send('open connection');
        });
        connection.on('message', (msg) => {
            expect(msg).toEqual(expect.anything());
            connection.close();
        })
        connection.on('close', () => done());
        done()
    });
});