//====== Dependencies =====
var axios = require("axios");
var _ = require("underscore");
// ============ URL ================
var app_id= "_app_id=966158dd";
var app_key = "&_app_key=1a26a81b5d589e14c6857ca6160e5df4";
// var cuisine = "chinese" ;
var url = "http://api.yummly.com/v1/api/recipes?" + app_id + app_key + "&q=";
var i = 0;
//============= Model Imports ========
var generateWords = require("./wordGenerator").generateWords;
var clearWords = require("./wordGenerator").clearWords;
var randomArray = require("./wordGenerator").randomArray;
var removeDuplicates = require("./wordGenerator").checkDuplicates;
var finalArray = require("./wordGenerator").finalArray;
var queryArray = require("./wordGenerator").finalArray[i];
var formatLog = require("./wordGenerator").formatLog;

//============= Variables ===========
var recipeArray = [];
var finalRecipeArray = [];
var line =  "\n" + "==========================================================================================="  + "\n"   ;

//============Object ==============

var processQuery = {
	wordArray: [],
	totalArray: [],
	
	getRecipes: function (array){
		console.log("Query URL:" + url + "\n" + line);
		console.log("Words To Search: " + "\n");
		formatLog(finalArray);
		axios.get(url + queryArray)
		.then(function (response, status){
			var recipeLength= response.data.matches.length;
			console.log("Recipe Array Length: " + recipeLength + "\n");
			for (var i = 0 ; i < recipeLength; i++){
				var recipeMatch = response.data.matches[i].recipeName;	
			 	recipeArray.push(recipeMatch);
			}
			console.log( "Search Results: " + "\n" );
			formatLog (recipeArray);

		}).then(function(response){
			finalRecipeArray = _.sample(recipeArray, 5);
			line
			console.log("Recipes: " + "\n");
			formatLog(finalRecipeArray);

		}).then(function(array){
			var tempObj = {};
			var i= 0;
			var j =1;
			for(i =0; i < finalRecipeArray.length; i++){
				tempObj[finalRecipeArray[i]] = j;
				
				j++;
			};
			var final =[];
			for(var key in tempObj)
				final.push(key);
			console.log( "Recipes Without Duplicates: " + "\n");
			formatLog(final);
			finalArray = finalArray.concat(final);
			console.log( "Recipes and Words: " + "\n" );
			formatLog(finalArray);
					 
		});
	},
}

processQuery.getRecipes();


		// 	 $.when( ajax1(), ajax2(), ajax3(), ajax4(), ajax5()).done(function(a1, a2, a3, a4, a5){


				
			// 		cuisine = randomArray[i]
			// 		$.get(url , function(data, status){
			// 			//then randomly select the recipename and push into the array.
			// 			console.log(url);
						
			// 		}).then( function (response){
			// 			console.log(cuisine + data.response); 
			// 		});
			// 	}
