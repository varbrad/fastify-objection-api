/**
 * @param {import('../../../app')} app
 */
module.exports = async app => {
  app.register(require('./requests'), { prefix: '/requests' })
  app.register(require('./sessions'), { prefix: '/sessions' })
  app.register(require('./users'), { prefix: '/users' })
}
