#!/usr/bin/env node

// imports
var util = require('util')
var dateIdeas = require('./index.js')

dateIdeas.randomIdea(function (err, idea) {
  if (err) {
    console.log(util.format('Err: %s', err))
    process.exit(1)
  }
  console.log(util.format('%s: %s', idea.Name, idea.Description))
})
