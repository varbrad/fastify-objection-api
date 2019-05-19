const Session = require('../../../models/Session')

/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = async app => {
  app.get('/', async request => {
    return await Session.fromRequest(request)
  })
}
