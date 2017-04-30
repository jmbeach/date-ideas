#!/usr/bin/env node

// imports
var path = require('path')
var util = require('util')
var sqlite3 = require('sqlite3').verbose()

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

var db = new sqlite3.Database(path.join(__dirname, 'ideas.db'), sqlite3.OPEN_READONLY, function (err) {
  if (err) {
    console.log(err)
    return
  }
  db.all('SELECT * from DateIdea', function (errSelect, rows) {
    if (errSelect) {
      console.log('Something went wrong selecting ideas from database')
      console.log(errSelect)
      return
    }
    var idea = rows[getRandomInt(0, rows.length - 1)]
    console.log(util.format('%s: %s', idea.Name, idea.Description))
  })
})
