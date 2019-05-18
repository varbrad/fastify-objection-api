/**
 * @param {import('../app')} app
 */
module.exports = async app => {
  const group = (prefix, group) => app.register(group, { prefix })
  //
  group('/api/person', require('./person'))
}
