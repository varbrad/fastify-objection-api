const { Model } = require('objection')
const uuid = require('uuid/v4')

class Session extends Model {
  static get tableName() {
    return 'sessions'
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./User'),
        join: {
          from: 'sessions.userId',
          to: 'user.id',
        },
      },
    }
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
  static async fromToken(token) {
    if (!token) return null
    const session = await Session.query()
      .first()
      .where({ token })
    return session || null
  }

  async user() {
    return await require('./User')
      .query()
      .findById(this.userId)
  }
}

module.exports = Session
