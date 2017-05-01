var Sequelize = require('Sequelize')
function defineDateIdea (sequelize) {
  var result = sequelize.define('DateIdea', {
    ID: {
      type: Sequelize.INTEGER,
      field: 'ID'
    },
    Name: {
      type: Sequelize.STRING,
      field: 'Name'
    },
    Blurb: {
      type: Sequelize.STRING,
      field: 'Blurb'
    },
    Description: {
      type: Sequelize.STRING,
      field: 'Description'
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    })
  return result
}
module.exports.defineDateIdea = defineDateIdea
