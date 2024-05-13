// Loads environment variables from a .env file into process.env
require('dotenv').config()

// Imports the pg library for working with PostgreSQL
const pg = require('pg')

// Configures SSL for PostgreSQL connections if a DATABASE_URL is present in the environment variables
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

// Defines common configuration settings for all environments
const sharedConfig = {
  client: 'pg', // Specifies the client (PostgreSQL) for knex to use
  migrations: { directory: './data/migrations' }, // Specifies the directory for migration files
  seeds: { directory: './data/seeds' }, // Specifies the directory for seed files
}

// Exports configuration settings for different environments
module.exports = {
  development: {
    ...sharedConfig, // Uses the sharedConfig settings
    connection: process.env.DEV_DATABASE_URL, // Specifies the connection URL for the development environment
  },
  testing: {
    ...sharedConfig, // Uses the sharedConfig settings
    connection: process.env.TESTING_DATABASE_URL, // Specifies the connection URL for the testing environment
  },
  production: {
    ...sharedConfig, // Uses the sharedConfig settings
    connection: process.env.DATABASE_URL, // Specifies the connection URL for the production environment
    pool: { min: 2, max: 10 }, // Specifies the minimum and maximum number of connections in the pool
  },
}
