//======== Dependencies ==========

var _ = require("underscore");

// ============ URL ================
var app_id= "_app_id=966158dd";
var app_key = "&_app_key=1a26a81b5d589e14c6857ca6160e5df4";
var cuisine = "";
var url = "http://api.yummly.com/v1/api/recipes?" + app_id + app_key + "&q=" + cuisine;

//======== Array Variables ==============
//var foodType=[];  // <----------Uncomment Pass in database query here
var randomArray = [];
var randomWords = {

		finalArray:[];
		//***** Varriable below is for testing purposes*****
		foodType: ["punjabi", "italian", "mexican","chinese","russian","indian", "indian", "indian",
		 "spanish","mediterranean","ethiopian","moroccan", "greek","american","japanese","korean",
		 "gastropub","pizza","desserts","salad","burgers","pasta","seafood","thai","vegan","english",
		 "healthy","vegetarian","food","chinese","sandwiches","fast food","soup","meat","barebeque",
		 "vegetables","buffet","cocktails","drinks","beer"],

		chooseOneRandom: function(data){
			var randomItem = this.foodType[Math.floor(Math.random()*this.foodType.length)];
			randomArray.push(randomItem);
		},

		chooseTenRandom: function(){
			for(i = 0; i < 10; i++){
				this.chooseOneRandom();
			}
			console.log("Original Array: " + randomArray)
			randomArray = this.removeDuplicates(randomArray);
			console.log("New Array: " + randomArray);		
		},

		removeDuplicates: function(arr){
					var tempObj = {};
					var j =1;
					for(i =0; i < arr.length; i++){
						tempObj[arr[i]] = j;
						j++;
					};
					var final =[];
					for(var key in tempObj)
						final.push(key);
					return final;
		},

		reduceArray: function (){
			 this.chooseTenRandom();
			 finalArray = _.sample(randomArray, 5);
			 console.log("Final Array: " + finalArray);
		},

		clearRandomArray: function(){
			randomArray = [];
		}
};

//Runs method to generate random words
function generateWords () {
	var random = randomWords.reduceArray();
}

//Runs method to clear the randomArray
function clearWords () {
	var clear = randomWords.clearRandomArray();
}

generateWords();

// Checks to make sure randomArray clear is working
function checkClear () {
	for(i =0; i < randomArray.length; i++) {
		if (randomArray[i] === "thai" || randomArray[i] === "indian" || randomArray[i] === "mexican"){
			clearWords();
			console.log(randomArray);
		}
	}
}




module.exports







