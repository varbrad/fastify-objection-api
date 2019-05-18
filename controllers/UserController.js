const User = require('../models/User')

exports.show = async () => await 123

exports.store = async request => {
  return await User.register(request.body)
}

exports.login = async request => {
  return await User.authenticate(request.body)
}
