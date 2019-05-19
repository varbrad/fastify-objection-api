const auth = require('../../../handlers/auth')

/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = async app => {
  app.get('/', async request => {
    return request.headers
  })
  app.all('/auth', { preHandler: [auth] }, async () => {
    return 'Auth is OK!'
  })
}
