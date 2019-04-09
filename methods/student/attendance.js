const models = require('../../models');

const attendance = {}

attendance.sayHello = (name) => {
    console.log("Hello, I am " + name);
    return;
}

module.exports = attendance;