const { Model } = require('objection')

class Person extends Model {
  static get tableName() {
    return 'persons'
  }

  static get relationMappings() {
    return {
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'persons.parentId',
          to: 'persons.id',
        },
      },
    }
  }

  static get virtualAttributes() {
    return ['fullName']
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

module.exports = Person
