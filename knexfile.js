// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projectsDB.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: './data/knex_migrations'
    }
  }
}
