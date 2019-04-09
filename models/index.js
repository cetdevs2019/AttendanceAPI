const Sequelize = require('sequelize');
const sequelize = new Sequelize('data', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

let db = []
var people = require('./people/people');


db.push({people: people(sequelize, Sequelize)});

module.exports = db
