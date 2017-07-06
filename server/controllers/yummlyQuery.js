
//======================= Dependencies ============================================

var axios = require("axios");
var _ = require("underscore");

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

var recipeArray = [];
var finalRecipeArray = [];
var line =  "\n" + "==========================================================================================="  + "\n"   ;

//========================= Object =================================================

var processQuery = {
	wordArray: [],
	totalArray: [],

	getWordOne: function(){
  		return axios.get(url + queryWord1);
	},
	
	getWordTwo: function(){
  		return axios.get(url + queryWord2);
	},
	
	getWordThree: function(){
  		return axios.get(url + queryWord3);
	},
	
	getWordFour: function(){
  		return axios.get(url + queryWord4);
	},
	
	getWordFive: function(){
  		return axios.get(url + queryWord5);
	},

	getRecipes: function (word){
		console.log("Query URL:" + url + "\n" + line);
		formatLog(finalArray);
		var self = this;
		axios.all([this.getWordOne(), this.getWordTwo(), this.getWordThree(), this.getWordFour(), this.getWordFive()])
		.then(axios.spread(function (getOne, getTwo, getThree, getFour, getFive){ 
		 	var recipeLength1= getOne.data.matches.length;
		 	var recipeLength2= getTwo.data.matches.length;
		 	var recipeLength3= getThree.data.matches.length;
		 	var recipeLength4= getFour.data.matches.length;
		 	var recipeLength5= getFive.data.matches.length;
		 	console.log("Recipe Array 1 Length: " + recipeLength1 + "\n");
		 	console.log("Recipe Array 2 Length: " + recipeLength2 + "\n");
		 	console.log("Recipe Array 3 Length: " + recipeLength3 + "\n");
		 	console.log("Recipe Array 4 Length: " + recipeLength4 + "\n");
		 	console.log("Recipe Array 5 Length: " + recipeLength5 + "\n");
			for (var i = 0 ; i < recipeLength1; i++){
				var recipeMatchOne = getOne.data.matches[i].recipeName;
			 	recipeArray.push(recipeMatchOne);
			}
			for (var i = 0 ; i < recipeLength2; i++){
				var recipeMatchTwo = getTwo.data.matches[i].recipeName;
			 	recipeArray.push(recipeMatchTwo);
			}
			for (var i = 0 ; i < recipeLength3; i++){
				var recipeMatchThree = getThree.data.matches[i].recipeName;
			 	recipeArray.push(recipeMatchThree);
			}
			for (var i = 0 ; i < recipeLength4; i++){
				var recipeMatchFour = getFour.data.matches[i].recipeName;
			 	recipeArray.push(recipeMatchFour);
			}
			for (var i = 0 ; i < recipeLength5; i++){
				var recipeMatchFive = getFive.data.matches[i].recipeName;
			 	recipeArray.push(recipeMatchFive);
			}
		 	console.log( "Search Results: " + "\n" );
		 	formatLog (recipeArray); 
			self.reduceArray(recipeArray);
		}));
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
		// console.log(final + " why wont it work")
		for(var key in tempObj)
			final.push(key);
		console.log( "Array Without Duplicates: " + "\n");
		formatLog(final);
		// return this.final;
		this.arrayToDisplay(final);
	},

	arrayToDisplay: function (arr){
		finalArray = finalArray.concat(arr);
		console.log( "Recipes and Words To Display: " + "\n" );
		formatLog(finalArray);
		return this.finalArray;
	},

}

processQuery.getRecipes();
