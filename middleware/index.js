const Session = require('../models/Session')
const getToken = require('../utils/getToken')

/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = app => {
  app.decorateRequest('session', null)
  app.decorateRequest('user', null)

  app.addHook('onRequest', async req => {
    // Get the token from our request
    const token = getToken(req)
    if (token) {
      // Get the Session from the token
      const session = await Session.fromToken(token)
      if (session) {
        req.session = session
        const user = await session.user()
        if (user) req.user = user
      }
    }
  })
}
