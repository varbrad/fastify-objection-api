/**
 * @param {import('../../../app')} app
 */
module.exports = async app => {
  app.register(require('./session'), { prefix: '/session' })
  app.register(require('./user'), { prefix: '/user' })
}
