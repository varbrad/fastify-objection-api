/**
 * @param {import('../../app')} app
 */
module.exports = async app => {
  app.register(require('./v1'), { prefix: '/v1' })
}
