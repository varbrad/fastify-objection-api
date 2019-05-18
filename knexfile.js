module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'testdb.sqlite3',
    },
    useNullAsDefault: true,
  },
}
