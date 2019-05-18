const fastify = require('fastify')

const app = fastify({ logger: true })

app.register(require('./routes'))

module.exports = app
