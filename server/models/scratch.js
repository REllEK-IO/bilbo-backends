//======== Dependencies ==========

var _ = require("underscore");

//======== Array Variables ==============
//var foodType=[];  // <----------Uncomment Pass in database query here
// var randomArray = [];
// var finalArray = [];

var randomWords = {

		// finalArray:[],
		//***** Varriable below is for testing purposes*****
		foodType: ["punjabi", "italian", "mexican","chinese","russian","indian", "indian", "indian",
		 "spanish","mediterranean","ethiopian","moroccan", "greek","american","japanese","korean",
		 "gastropub","pizza","desserts","salad","burgers","pasta","seafood","thai","vegan","english",
		 "healthy","vegetarian","food","chinese","sandwiches","fast food","soup","meat","barebeque",
		 "vegetables","buffet","cocktails","drinks","beer"],
		randomArray: [],
		finalArray: [],


		chooseTenRandom: function(){
			this.randomArray = _.sample(this.foodType, 10);
			console.log("Original Array: " + this.randomArray)
			this.randomArray = this.removeDuplicates(this.randomArray);
			console.log("New Array: " + this.randomArray);		
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
			 this.finalArray = _.sample(this.randomArray, 5);
			 console.log("Final Array: " + this.finalArray);
			 // var results = Object.values(finalArray);
			 // return this.finalArray;
		},

		clearRandomArray: function(){
			this.randomArray = [];
			console.log("Array has been cleared: " + this.randomArray);
		},

		getFinalArray: function (){
			return this.finalArray;
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

function randomArray() {
	var randomArray = randomArray;
}
function checkDuplicates() {
	var check = randomWords.removeDuplicates();
}
randomWords.getFinalArray;
// ****** Checks to make sure randomArray clear is working *****
// function checkClear () {
// 	for(i =0; i < randomArray.length; i++) {
// 		if (randomArray[i] === "thai" || randomArray[i] === "indian" || randomArray[i] === "mexican"){
// 			clearWords();
// 			console.log(randomArray);
// 		}
// 	}
// }




module.exports = { 
	generateWords: generateWords,
	clearWords: clearWords,
	randomArray: randomArray,
	// finalArray: finalArray,
	removeDuplicates: checkDuplicates,

}







// var recipeType = matches[i].recipeName;
// 		// .then(function (response, status){
// 		 	var recipeLength= matches.length;
		 	
// 		 	var recipeMatch1 = getOne.recipeType
// 		 	var recipeLength1 = getOne.recipeLength;
			
// 			var recipeMatch2 = getTwo.recipeType;
// 			var recipeLength2 = getTwo.recipeLength;
			
// 			var recipeMatch3 = getThree.recipeType;
// 			var recipeLength3 = getThree.recipeLength;
			
// 			var recipeMatch4 = getFour.recipeType;
// 			var recipeLength4 = getFour.recipeLength;
			
// 			var recipeMatch5 = getFive.recipeType;
// 			var recipeLength5 = getFive.recipeLength;
				
// 		// 	console.log("Recipe Array Length: " + recipeLength + "\n");
// 			// for (var i = 0 ; i < 10; i++){
// 			self.getDataLoop(recipeLength1, recipeMatch1);
// 			self.getDataLoop(recipeLength2, recipeMatch2);
// 			self.getDataLoop(recipeLength3, recurecipeMatch3);
// 			self.getDataLoop(recipeLength4, recipeMatch4);
// 			self.getDataLoop(recipeLength5, recipeMatch5);


// 			getDataLoop: function(data){
// 		for(var i < 0; i < 10; i++){
// 			recipeArray.push(data);
// 			// return this.recipeArray
		 	
// 		// }).then(function(response){
// 		// 	finalRecipeArray = _.sample(recipeArray, 30);
// 		// 	line
// 		// 	console.log("Recipes: " + "\n");
// 		// 	formatLog(finalRecipeArray);


// 			// }).then(function(array){
// 		// 	var tempObj = {};
// 		// 	var i= 0;
// 		// 	var j =1;
// 		// 	for(i =0; i < finalRecipeArray.length; i++){
// 		// 		tempObj[finalRecipeArray[i]] = j;
				
// 		// 		j++;
// 		// 	};
// 		// 	var final =[];
// 		// 	for(var key in tempObj)
// 		// 		final.push(key);
// 		// 	console.log( "Recipes Without Duplicates: " + "\n");
// 		// 	formatLog(final);
// 		// 	finalArray = finalArray.concat(final);
// 		// 	console.log( "Recipes and Words: " + "\n" );
// 		// 	formatLog(finalArray);
// 		// 	// return this.final;
// 		// 	return this.finalArray;
// 		// }));
// 	}