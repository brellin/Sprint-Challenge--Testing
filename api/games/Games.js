const db = require('../../data')

module.exports = {

    find: function (title) {
        const query = db('games')

        return title ?
            query
                .where({ title })
                .first()
            :
            query
    },

    add: (game) => {
        return db('games').insert(game)
    },

    remove: (title) => {
        return db('games')
            .where({ title })
            .first()
            .del()
    },

    update: (game) => {
        const { title } = game

        return db('games')
            .where({ title })
            .update(game)
    }

}
