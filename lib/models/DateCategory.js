var Sequelize = require('sequelize')
function defineDateCategory (sequelize) {
  return sequelize.define('DateCategory', {
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
module.exports.defineDateCategory = defineDateCategory
