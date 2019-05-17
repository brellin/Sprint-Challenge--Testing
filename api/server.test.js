const server = require('./')
const request = require('supertest')

describe('server', () => {

    describe('GET /', () => {

        it('should return a status of 200', async () => {

            const res = await request(server).get('/')

            expect(res.status).toBe(200)

        });

    });

});