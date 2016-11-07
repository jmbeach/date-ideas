#!/usr/bin/env node
var sqlite3 = require('sqlite3').verbose();
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
var db = new sqlite3.Database('ideas.db',sqlite3.OPEN_READONLY,function(err) {
	if (err) {
		console.log(err);
		return;
	}
	db.all("SELECT * from Idea",function(errSelect, rows) {
		if (errSelect) {
			console.log("Something went wrong selecting ideas from database");
			console.log(errSelect);
			return;
		}
		var idea = rows[getRandomInt(0, rows.length-1)];
		console.log(idea.Description);
	});
});
