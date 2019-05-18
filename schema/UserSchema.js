const login = {
  type: 'object',
  required: ['password'],
  properties: {
    username: {
      type: ['null', 'string'],
    },
    password: {
      type: 'string',
    },
    email: {
      type: ['null', 'string'],
    },
  },
}

const model = {
  type: 'object',
  required: ['username', 'password'],
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    email: {
      type: ['null', 'string'],
    },
  },
}

exports.model = model
exports.login = login

exports.store = {
  body: model,
}
