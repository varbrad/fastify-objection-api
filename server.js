const app = require('./app')

const start = async () => {
  try {
    await app.listen(3000)
    const address = app.server.address().address
    app.log.info(`Server listening at ${address}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
