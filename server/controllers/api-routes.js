var Word = require("../models/word");
var yummly = require("../controllers/yummlyQuery");
var rp = require("request-promise");
// var passport = require('passport');

const APIKEY = "&key=AIzaSyDddN_DZnQvrQU9bDBK3YFDTEVaWzSG2V0";
const QUERYURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

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

	app.get('/api/place', function(req, res){
		const PLACES_QUERY = req.query.place;
		// console.log(PLACES_QUERY);
		var searchQuery = PLACES_QUERY.query || "food";
		var latitude = PLACES_QUERY.lat || 32.792095;
		var longitude = PLACES_QUERY.lng || -117.232337;
		var searchRadius = PLACES_QUERY.radius || 10000;
		var searchMinPrice = PLACES_QUERY.minPrice || 0;
		var searchMaxPrice = PLACES_QUERY.maxPrice || 4;

		const STRUCTURED_QUERY = QUERYURL + "&location=" + latitude + "," + longitude + "&keyword=" + encodeURI(searchQuery) + "&radius=" + searchRadius +
			"&opennow=true&minprice=" + searchMinPrice + "&maxprice=" + searchMaxPrice + APIKEY;

		// console.log("Get places", STRUCTURED_QUERY);

		var getCall = rp.get(STRUCTURED_QUERY)
			.then(function (response) {
				// console.log(response);
				res.json(JSON.parse(response));
			})
			.catch(function (error) {
				res.json(error);
			});
	})

	app.get('/api/placeid', function(req,res){
		const PLACE_ID = req.query.id;

		const QUERY_URL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + PLACE_ID + APIKEY;
		console.log("details url", PLACE_ID, QUERY_URL)
		var getCall = rp.get(QUERY_URL)
			.then(function (response) {
				// console.log("Stack Request for details " + response)
				res.json(JSON.parse(response));
			})
			.catch(function (error) {
				res.json(error);
			});		
	})

		app.get('/api/photo/:reference', function(req,res){
		const PHOTO_REFERENCE = req.params.reference;

		if(PHOTO_REFERENCE !== undefined || PHOTO_REFERENCE !== null || PHOTO_REFERENCE !== "undefined"){
			const QUERY_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference="
		+ PHOTO_REFERENCE + APIKEY;

		var getCall = rp.get(QUERY_URL)
			.then(function (response) {
				var condensed = response.pipe();
				
				console.log("From photo get: " +typeof condensed);
				
				res.json(typeof condensed);
			})
			.catch(function (error) {
				res.json(error);
			});
		
			}
		})

	// app.get("/auth/google", passport.authenticate('google', {scope: ['profile','email']}));

	// app.get("/auth/google/callback",
	// 	passport.authenticate('google', {
	// 		successRedirect : '/',
	// 		failureRedirect: '/'
	// 	}));
}