// bring in knex
const knex = require('knex');
// import knexfile.js
const config = require('../knexfile.js')
// declare the environment



// export
module.exports = knex(config.development)