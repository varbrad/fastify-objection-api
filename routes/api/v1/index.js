/**
 * @param {import('../../../app')} app
 */
module.exports = async app => {
  app.register(require('./user'), { prefix: '/user' })
}
