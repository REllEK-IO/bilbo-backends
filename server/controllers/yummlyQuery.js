
//======================= Dependencies ============================================

var request = require("request");
var _ = require("underscore");
var Bluebird = require("bluebird");
var rp = require("request-promise");
// ========================== URL =================================================

var app_id= "_app_id=966158dd";
var app_key = "&_app_key=1a26a81b5d589e14c6857ca6160e5df4";
var url = "http://api.yummly.com/v1/api/recipes?" + app_id + app_key + "&q=";
var i = 0;

//======================= Model Imports ===========================================

var generateWords = require("./wordGenerator").generateWords;
var clearWords = require("./wordGenerator").clearWords;
var randomArray = require("./wordGenerator").randomArray;
var removeDuplicates = require("./wordGenerator").checkDuplicates;
var finalArray = require("./wordGenerator").finalArray;
var queryWord1 = require("./wordGenerator").finalArray[0];
var queryWord2 = require("./wordGenerator").finalArray[1];
var queryWord3 = require("./wordGenerator").finalArray[2];
var queryWord4 = require("./wordGenerator").finalArray[3];
var queryWord5 = require("./wordGenerator").finalArray[4];
var formatLog = require("./wordGenerator").formatLog;

//========================= Variables ==============================================
		// var requestAsync = promisify(request);

var recipeArray = [];
var finalRecipeArray = [];
var line =  "\n" + "==========================================================================================="  + "\n"   ;

//========================= Object =================================================

var processQuery = {
	wordArray: [],
	totalArray: [],

	getRecipes: function (word){
		console.log("Query URL:" + url + "\n" + line);
		formatLog(finalArray);
		var self = this;
		var query1 = rp(url + queryWord1);
		var query2 = rp(url + queryWord2);
		var query3 = rp(url + queryWord3);
		var query4 = rp(url + queryWord4);
		var query5 = rp(url + queryWord5);
		Bluebird.all([query1, query2, query3, query4, query5])
    	.spread(function (res1, res2, res3, res4, res5){  
    		var responseParsed1 = JSON.parse(res1);
    		var responseParsed2 = JSON.parse(res2);
			var responseParsed3 = JSON.parse(res3);
			var responseParsed4 = JSON.parse(res4);
			var responseParsed5 = JSON.parse(res5);
    		var search1 = Object.keys(responseParsed1["matches"]).map(function(key){
    			return responseParsed1["matches"][key];
    		});
    		var search2 = Object.keys(responseParsed2["matches"]).map(function(key){
    			return responseParsed2["matches"][key];
    		});
    		var search3 =Object.keys(responseParsed3["matches"]).map(function(key){
    			return responseParsed3["matches"][key];
    		});
    		var search4 =Object.keys(responseParsed4["matches"]).map(function(key){
    			return responseParsed4["matches"][key];
    		});
    		var search5 =Object.keys(responseParsed5["matches"]).map(function(key){
    			return responseParsed5["matches"][key];
    		});
	        console.log("Recipe Array 1 Length: " + search1.length + "\n");
			console.log("Recipe Array 2 Length: " + search2.length+ "\n");
			console.log("Recipe Array 3 Length: " + search3.length + "\n");
		 	console.log("Recipe Array 4 Length: " + search4.length + "\n");
			console.log("Recipe Array 5 Length: " + search5.length+ "\n");
			for (var i = 0 ; i < search1.length; i++){
				var recipeMatchOne = search1[i].recipeName;
			 	recipeArray.push(recipeMatchOne);
		 	}
			for (var i = 0 ; i < search2.length; i++){
				var recipeMatchTwo = search2[i].recipeName;
			 	recipeArray.push(recipeMatchTwo);
			}
			for (var i = 0 ; i < search3.length; i++){
				var recipeMatchThree = search3[i].recipeName;
			 	recipeArray.push(recipeMatchThree);
			}
			for (var i = 0 ; i < search4.length; i++){
				var recipeMatchFour = search4[i].recipeName;
			 	recipeArray.push(recipeMatchFour);
			}
			for (var i = 0 ; i < search5.length; i++){
				var recipeMatchFive = search5[i].recipeName;
			 	recipeArray.push(recipeMatchFive);
		 	}
		  	console.log( "Search Results: " + "\n" );
		  	formatLog (recipeArray); 
			self.reduceArray(recipeArray);
		});
	},

	reduceArray: function (array){
		finalRecipeArray = _.sample(array, 25);
		console.log("Final Array: " + "\n");
		formatLog(finalRecipeArray);
		this.checkDuplicates(finalRecipeArray);
	},

	checkDuplicates: function (array){
		var tempObj = {};
		var i= 0;
		var j =1;
		for(i =0; i < array.length; i++){
			tempObj[array[i]] = j;
			j++;
		};
		var final =[];
		for(var key in tempObj)
			final.push(key);
		console.log( "Array Without Duplicates: " + "\n");
		formatLog(final);
		this.arrayToDisplay(final);
	},

	arrayToDisplay: function (arr){
		finalArray = finalArray.concat(arr);
		console.log( "Recipes and Words To Display: " + "\n" );
		formatLog(finalArray);
		return this.finalArray;
	},

	getFinalArray: function(cb){
		cb(finalArray);
	}
 }

processQuery.getRecipes();

module.exports = processQuery;
