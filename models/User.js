const PasswordModel = require('objection-password')()
const { Model } = require('objection')
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
    return validPassword
  }

  static get jsonSchema() {
    return UserSchema.model
  }
}

module.exports = User
