const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('data', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.get('/', (req, res) => {
    res.send("IT WORKS!")
})

const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
