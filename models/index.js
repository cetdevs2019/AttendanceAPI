const Sequelize = require('sequelize');
const sequelize = new Sequelize('data', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

<<<<<<< HEAD
let db = []
var people = require('./people/people');


db.push({people: people(sequelize, Sequelize)});

module.exports = db
=======
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
>>>>>>> 57e3f2534d5a96307451405bc4bfe7d18130e2a9
