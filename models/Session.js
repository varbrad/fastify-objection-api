const { Model } = require('objection')
const uuid = require('uuid/v4')
// const UserSchema = require('../schema/UserSchema')

class Session extends Model {
  static get tableName() {
    return 'sessions'
  }

  /**
   * @param {import('./User')} user
   */
  static async make(user) {
    return await Session.query().insert({
      token: uuid(),
      userId: user.id,
    })
  }

  /**
   * @param {import('fastify').FastifyRequest} request
   */
  static async fromRequest(request) {
    try {
      const token = request.headers.authorization.match(/^Bearer (.*)/)[1]
      if (!token) throw new Error()
      const session = await Session.query()
        .first()
        .where({ token })
      if (!session) throw new Error()
      return session
    } catch (err) {
      throw new Error('Invalid session')
    }
  }
}

module.exports = Session
