const PasswordModel = require('objection-password')()
const { Model } = require('objection')
const UserSchema = require('../schema/UserSchema')

class User extends PasswordModel(Model) {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      sessions: {
        relation: Model.HasManyRelation,
        modelClass: require('./Session'),
        join: {
          from: 'users.id',
          to: 'sessions.userId',
        },
      },
    }
  }

  static async register({ username, password, email = null }) {
    return await User.query().insert({ username, password, email })
  }

  static async authenticate({ username, email, password }) {
    const user = await User.query()
      .first()
      .where({ username })
      .orWhere({ email })
      .skipUndefined()
    if (!user) throw new Error('User not found')
    const validPassword = await user.verifyPassword(password)
    if (!validPassword) throw new Error('Invalid user/password combo')
    return await require('./Session').make(user)
  }

  static get jsonSchema() {
    return UserSchema.model
  }

  async sessions() {
    return await require('./Session')
      .query()
      .where({ userId: this.id })
  }
}

module.exports = User
