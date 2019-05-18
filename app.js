const fastify = require('fastify')

const app = fastify({ logger: true })

app.get('/', async () => {
  return 'hello!'
})

module.exports = app
