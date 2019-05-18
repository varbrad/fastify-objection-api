/**
 * @param {import('./app')} app
 */
module.exports = async app => {
  app.get('/', async () => 'root route.')
}
