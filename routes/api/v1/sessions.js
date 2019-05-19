/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = async app => {
  app.get('/', async request => {
    return request.session
  })
  app.get('/all', async request => {
    return request.user.sessions()
  })
}
