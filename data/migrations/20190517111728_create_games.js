
exports.up = function (knex, Promise) {
    return knex.schema.createTable('games', col => {

        col
            .string('title')
            .notNullable()
            .unique()

        col
            .string('genre')
            .notNullable()

        col
            .integer('releaseYear')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('games')
};
