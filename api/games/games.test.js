const Games = require('./')
const request = require('supertest')

describe('Games endpoint', () => {

    describe('GET /', () => {

        it('should return a status of 200', async () => {

            const res = await request(Games).get('/')

            expect(res.status).toBe(202)

        });

        it('should have a length of 0', async () => {

            const res = await request(Games).get('/')

            expect(res.data).toHaveLength(1)

        });

        it('should return JSON', async () => {

            const res = await request(Games).get('/')

            expect(res.type).toBe('application/json')

        });

    });

});
