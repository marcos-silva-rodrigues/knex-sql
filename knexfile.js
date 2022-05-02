const { resolve } = require('path')

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql2",
  connection: {
    database: "learnsql",
    user: "sql",
    password: "sql",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: resolve(__dirname, 'src', 'migrations')
  },
};
