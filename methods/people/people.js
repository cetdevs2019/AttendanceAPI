const models = require('../../models');
const Promise = require('bluebird')

const People = {}

People.getPeople = id => new Promise((resolve, reject) => {
    models.people.findOne({where: {id: id}}).then(person => {
        resolve(person);
    }).catch(err => {
        reject(err);
    })
});


module.exports = People;