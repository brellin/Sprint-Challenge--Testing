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

    describe('POST /', () => {

        it('should return status of 200 when title and genre are included', async () => {

            const game = {
                title: 'Super Smash Bros Melee',
                genre: 'Action'
            }

            const res = await request(Games).post('/', game)

            expect(res.status).toBe(200)

        });

        it('should return a status of 500 when title or genre are not included', () => {

            let game = {
                title: 'Super Smash Bros Melee'
            }

            const res = await request(Games).post('/', game)

            expect(res.status).toBe(500)
        });

    });

});
