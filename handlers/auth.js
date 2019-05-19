module.exports = (request, _, done) => {
  if (!request.user) {
    done(new Error('You must be authenticated to access this route'))
  } else {
    done()
  }
}
