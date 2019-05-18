/**
 * @param {import('knex')} knex
 */
exports.up = knex =>
  knex.schema.createTable('persons', table => {
    table.increments('id').primary()
    table.integer('parentId').unsigned()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()

    table
      .foreign('parentId')
      .references('id')
      .inTable('persons')
  })

/**
 * @param {import('knex')} knex
 */
exports.down = knex => knex.schema.dropTable('persons')
