const { Model, knexSnakeCaseMappers } = require('objection')
const Knex = require('knex')
const knexfile = require('../knexfile')

const config = {
  ...knexfile.development,
  ...knexSnakeCaseMappers(),
}

Model.knex(Knex(config))
