const Games = require('../')
const request = require('supertest')

describe('Games endpoint', () => {

    describe('GET /games', () => {

        it('should return a status of 200', async () => {

            await request(Games).get('/games').then(res => {
                expect(res.status).toBe(200)
            })

        });

        it('should have a length of 0', async () => {

            const res = await request(Games).get('/games')

            expect(res.data).toBe(undefined)

        });

        it('should return JSON', async () => {

            const res = await request(Games).get('/games')

            expect(res.type).toBe('application/json')

        });

    });

    describe('POST /games', () => {

        it('should return status of 200 when title and genre are included', async () => {

            const res = await request(Games).post('/games').send({ title: 'Pacman', genre: 'Arcade' })

            expect(res.status).toBe(200)

        });

        it('should return a status of 500 when genre is not included', async () => {

            let game = {
                title: 'Super Smash Bros Melee'
            }

            const res = await request(Games).post('/games').send(game)

            expect(res.status).toBe(500)

            await request(Games).delete('/games/Pacman')
        });

        it('should return a status of 500 when title is not included', async () => {

            let game = {
                genre: 'Action'
            }

            const res = await request(Games).post('/games').send(game)

            expect(res.status).toBe(500)
        });

    });

});
