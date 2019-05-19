const PasswordModel = require('objection-password')()
const { Model } = require('objection')
const Session = require('./Session')
const UserSchema = require('../schema/UserSchema')

class User extends PasswordModel(Model) {
  static get tableName() {
    return 'users'
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
    const session = await Session.make(user)
    return session
  }

  static get jsonSchema() {
    return UserSchema.model
  }
}

module.exports = User
