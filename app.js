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
