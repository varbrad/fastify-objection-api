const fastify = require('fastify')

const app = fastify({ logger: { file: 'log.txt' } })

require('../database')

app.register(require('../routes'))

module.exports = app
