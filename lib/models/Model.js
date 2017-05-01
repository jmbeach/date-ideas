var DateCategoryGen = require('./DateCategory.js')
var DateIdeaGen = require('./DateIdea.js')
var PriceRangeGen = require('./PriceRange.js')
var SettingGen = require('./Setting.js')

function create (sequelize) {
  var category = DateCategoryGen.defineDateCategory(sequelize)
  var priceRange = PriceRangeGen.definePriceRange(sequelize)
  var setting = SettingGen.defineSetting(sequelize)
  var dateIdea = DateIdeaGen.defineDateIdea(sequelize)
  setting.hasMany(dateIdea)
  dateIdea.belongsTo(setting)
  priceRange.hasMany(dateIdea, { foreignKey: 'PriceID' })
  dateIdea.belongsTo(priceRange, { foreignKey: 'PriceID' })
  category.hasMany(dateIdea, { foreignKey: 'CategoryID' })
  dateIdea.belongsTo(category, { foreignKey: 'CategoryID' })
  return {
    Category: category,
    PriceRange: priceRange,
    Setting: setting,
    DateIdea: dateIdea
  }
}

module.exports.create = create
