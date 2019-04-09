<<<<<<< HEAD
const express = require('express');
const app = express();

const router = require('./routes/index')
const methods = require('./methods')
const models = require('./models')

// console.log(methods.students.Attendance.sayHello("Name"));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', router)
// models.people.findOne({where: {id: 1}}).then(person => {
//   person.destroy();
// });

console.log(models.people);

const port = process.env.port || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
=======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

module.exports = app;
>>>>>>> 57e3f2534d5a96307451405bc4bfe7d18130e2a9
