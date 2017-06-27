import Word from "./models/word";

const addArrayWords = function (arr, i) {
	var word = arr[i].toString().toLowerCase();
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
				if (i < arr.length - 1) {
					i++;
					addArrayWords(arr, i);
				} else {
					console.log("+++ []Posts Success");
					console.log("$$$ STARTUP []Finished adding array of words to the DB!");
				}
			}
		});
}

const Scripts = (function(){
	const startUp = function(){
		console.log("Setting up initial DB Word data");
		var foodType = ["punjabi", 
			"italian", 
			"mexican",
			"chinese",
			"russian",
			"indian",
			"spanish",
			"mediterranean",
			"ethiopian",
			"moroccan",
			"greek",
			"american",
			"japanese",
			"korean",
			"gastropub",
			"pizza",
			"desserts",
			"salad",
			"burgers",
			"pasta",
			"seafood",
			"thai",
			"vegan",
			"english",
			"healthy",
			"vegetarian",
			"food",
			"chinese",
			"sandwiches",
			"fast food",
			"soup",
			"meat",
			"barebeque",
			"vegetables",
			"buffet",
			"cocktails",
			"drinks",
			"beer"
    ];
		addArrayWords(foodType,0);
	}
	
	return ({
		"startUp" : startUp
	});
})();

module.exports = Scripts;