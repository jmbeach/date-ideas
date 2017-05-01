var Sequelize = require('sequelize')
function definePriceRange (sequelize) {
  return sequelize.define('PriceRange', {
    ID: {
      type: Sequelize.INTEGER,
      field: 'ID'
    },
    Name: {
      type: Sequelize.STRING,
      field: 'Name'
    },
    Rank: {
      type: Sequelize.INTEGER,
      field: 'Rank'
    },
    LowerBound: {
      type: Sequelize.FLOAT,
      field: 'LowerBound'
    },
    UpperBound: {
      type: Sequelize.FLOAT,
      field: 'UpperBound'
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    })
}
module.exports.definePriceRange = definePriceRange
