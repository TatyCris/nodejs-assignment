const WebSocket = require('ws')

describe('app', () => {
    it('connect websockets response', async (done) => {
        const url = 'http://localhost:5000'
        const connection = new WebSocket(url)
            .on('message', (msg) => {
                expect(msg).toEqual(expect.anything());
                connection.close();
            })
            .on('close', () => done());
    });
});