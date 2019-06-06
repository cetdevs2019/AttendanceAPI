const express = require('express');
const app = express();

const router = require('./routes/index');
const methods = require('./methods');

methods.people.People.getPeople(22).then(person => {
  console.log(person.dataValues);
});

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', router)


const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
