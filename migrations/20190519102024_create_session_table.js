/**
 * @param {import('knex')} knex
 */
exports.up = knex =>
  knex.schema.createTable('sessions', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
    table.string('token').unique()
    table.timestamps(false, true)
  })

/**
 * @param {import('knex')} knex
 */
exports.down = knex => knex.schema.dropTable('sessions')
