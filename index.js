var path = require('path');
var sqlite3 = require('sqlite3').verbose();
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.randomIdea = function(callback) {
  var db = new sqlite3.Database(path.join(__dirname,'ideas.db'),sqlite3.OPEN_READONLY,function(err) {
  	if (err) {
      callback(err);
      return;
  	}
  	db.all("SELECT * from Idea",function(errSelect, rows) {
  		if (errSelect) {
        callback(errSelect);
  			return;
  		}
  		var idea = rows[getRandomInt(0, rows.length-1)];
  		console.log(idea.Description);
      callback(null, idea);
  	});
  });
}
