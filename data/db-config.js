// Import the knex library
const knex = require('knex')

// Import the configuration object for knex from the knexfile.js file
const configs = require('../knexfile')

// Export a knex instance initialized with the configuration corresponding to the current environment
module.exports = knex(configs[process.env.NODE_ENV])
