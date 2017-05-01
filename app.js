#!/usr/bin/env node

// imports
var util = require('util')
var dateIdeas = require('./index.js')

function strPriceRank (rank) {
  if (rank === -1) {
    return 'FREE'
  }
  var result = ''
  for (var i = 0; i < rank; i++) {
    result += '$'
  }
  return result
}

dateIdeas.randomIdea(function (err, idea) {
  if (err) {
    console.log(util.format('Err: %s', err))
    process.exit(1)
  }
  idea = idea.dataValues
  var categoryName = ''
  if (idea.DateCategory) {
    categoryName = idea.DateCategory.Name
  }
  console.log(util.format('%s: %s\nCategory: %s\nSetting: %s\nPrice: %s', idea.Name, idea.Description, categoryName, idea.Setting.Name, strPriceRank(idea.PriceRange.Rank)))
})
