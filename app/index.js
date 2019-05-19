const fastify = require('fastify')

const app = fastify({ logger: { file: 'log.txt' } })

require('../database')

app.addHook('onRoute', options => {
  console.log(options.method + ': ' + options.url)
})

app.register(require('../routes'))

module.exports = app
