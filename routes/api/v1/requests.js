const auth = (request, _, done) => {
  if (!request.user) {
    done(new Error('You must be authenticated to access this route'))
  } else {
    done()
  }
}

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
