var Word = require("../models/word");
var yummly = require("../controllers/yummlyQuery");

const addArrayWords = function (arr, i) {
	word = arr[i].toString().toLowerCase();
	Word.findOneAndUpdate(
		{
			"word": word
		}, 
		{
			"word": word
		}, 
		{
			upsert: true
		},
		function (err, doc) {
			if (err) {
				console.log("--- []Posts Failure", err);
				res.send(500, {
					"message": "Failure to post",
					"err": err
				});
			} else {
				console.log("+++ []Added " + word + " to the DB!");
				if (i < arr.length) {
					i++;
					addArrayWords(arr, i);
				} else {
					console.log("+++ []Posts Success");
					res.json({
						"message": "Post Successful"
					});
					console.log("$$$ []Finished adding array of words to the DB!");
				}
			}
		});
}

module.exports = function (app) {
	app.post("/api/word", function (req, res) {
		var word = req.body.word;
		if (typeof word === Array) {
			console.log("$$$ []Adding array of words to DB!");
			addArrayWords(req.body.word, 0);
		} else {
			console.log("$$ Adding word to the DB!")
			word = word.toString().toLowerCase();
			Word.findOneAndUpdate({
				"word": word
			}, {
				"word": word
			}, {
				upsert: true
			}, function (err, doc) {
				if (err) {
					console.log("--- Posts Failure", err);
					res.send(500, {
						"message": "Failure to post",
						"err": err
					});
				} else {
					console.log("+++ Posts Success");
					res.json({
						"message": "Post Successful"
					});
				}
			});
		}
	});
	app.get("/api/word", function (req, res) {
		Word.find({})
			.then((response) => {
				console.log("@@@Request for all words", response);
				res.json(response);
			})
			.catch((err) => {
				console.log(err);
				res.json({
					"message": "---Something went wrong with the db",
					"err": err
				})
			})
	});

	app.get("/api/yummly", function (req,res){
		yummly.getFinalArray(res.json);
	})
}