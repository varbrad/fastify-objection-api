module.exports = request => {
  try {
    return request.headers.authorization.match(/^Bearer (.*)/)[1]
  } catch (err) {
    return null
  }
}
