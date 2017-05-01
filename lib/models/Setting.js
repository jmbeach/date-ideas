var Sequelize = require('Sequelize')
function defineSetting (sequelize) {
  return sequelize.define('Setting', {
    ID: {
      type: Sequelize.INTEGER,
      field: 'ID'
    },
    Name: {
      type: Sequelize.STRING,
      field: 'Name'
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
}
module.exports.defineSetting = defineSetting
