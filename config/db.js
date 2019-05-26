const knex = require('knex');

const db = knex({
  client: 'mysql',
  connection: {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b170499f3a67ae',
    password: 'cc0535d3'
  }
});

module.exports = db;