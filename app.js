const express = require('express');
const app = express();

const router = require('./routes/index')
//const Sequelize = require('sequelize');
// const sequelize = new Sequelize('data', 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/', router)

const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
