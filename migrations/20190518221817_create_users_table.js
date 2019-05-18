/**
 * @param {import('knex')} knex
 */
exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table
      .string('username')
      .unique()
      .notNullable()
    table.string('email').unique()
    table.string('password').notNullable()
    table.timestamps()
  })

/**
 * @param {import('knex')} knex
 */
exports.down = knex => knex.schema.dropTable('users')
