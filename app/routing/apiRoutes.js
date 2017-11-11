var friends = require("../data/friends.js");

module.exports = function(app) { 
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {


		friends.push(req.body);


		var matchName = "";
		var matchImage = "";
		var totalDiff = 1000;

		for(var i = 0; i < friends.length; i++){
			var diff = 0;
			for (var j = 0; j < friends[i].scores[j]; j++){
				diff += Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j]));
			}

			if(diff < totalDiff){
				totalDiff = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}


		res.json({status: 'OK', name: matchName, photo: matchImage});
	});


};