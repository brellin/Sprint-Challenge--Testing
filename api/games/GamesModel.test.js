const db = require('../../data')
const Games = require('./Games')

describe('Games Model', () => {

    afterEach(async () => {
        await db('games').truncate()
    })

    describe('find()', () => {

        it('should return an empty array', async () => {

            const games = await Games.find()

            expect(games).toEqual([])

        });

    });

});
