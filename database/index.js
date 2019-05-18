const { Model } = require('objection')
const Knex = require('knex')
const knexfile = require('../knexfile')

Model.knex(Knex(knexfile.development))
