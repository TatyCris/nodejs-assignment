const request = require('supertest')
const app = require('../../server')
describe('Post Endpoints', () => {
    it('should get all veicles data', async () => {
        const res = await request(app)
            .get('/vehicles')
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('post')
    })
})