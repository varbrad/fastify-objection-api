/**
 * @param {import('../app')} app
 */
module.exports = async app => {
  app.register(require('./api'), { prefix: '/api' })
}
