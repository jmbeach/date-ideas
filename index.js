var path = require('path')
var Sequelize = require('sequelize')
var Model = require('./lib/models/Model.js')

var sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'ideas.db'),
  logging: false
})
var models = Model.create(sequelize)

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function randomIdea (callback) {
  models.DateIdea.findAndCountAll({
    include: [models.Setting, models.PriceRange, models.Category]
  }).then(function (result) {
    var selectedIndex = getRandomInt(0, result.count - 1)
    callback(null, result.rows[selectedIndex])
  })
}
module.exports.randomIdea = randomIdea
