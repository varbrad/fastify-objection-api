const UserController = require('../../../controllers/UserController')
const UserSchema = require('../../../schema/UserSchema')

/**
 * @param {import('../../../app')} app
 */
module.exports = async app => {
  app.post('/', { schema: UserSchema.store }, UserController.store)
  app.post('/login', { schema: UserSchema.login }, UserController.login)
}
