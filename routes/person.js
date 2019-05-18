const Person = require('../models/Person')

/**
 * @param {import('../app')} app
 */
module.exports = async app => {
  app.get('/', async () => {
    return true
  })

  app.get('/:id', async request => {
    const person = await Person.query()
      .findById(request.params.id)
      .allowEager('parent(fullName)')
      .eager(request.query.include)
    if (!person) throw new Error('Person not found')
    return person
  })
}
