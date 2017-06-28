// ============ URL ================
var app_id= "_app_id=966158dd";
var app_key = "&_app_key=1a26a81b5d589e14c6857ca6160e5df4";
var cuisine = "chinese";
var url = "http://api.yummly.com/v1/api/recipes?" + app_id + app_key + "&q=" + cuisine;

 queryYummly: function (){
			// this.chooseFiveRandom();
			console.log("New Choices" + randomArray);
			var first = this.randomArray[0];
			console.log("Choice 1 " + first);
			var second = this.randomArray[1];
			var third = this.randomArray[2];
			var fourth = this.randomArray[3];
			var fifth = this.randomArray[4];

			// $.when( ajax1(), ajax2(), ajax3(), ajax4(), ajax5()).done(function(a1, a2, a3, a4, a5){


				
			// 		cuisine = randomArray[i]
			// 		$.get(url , function(data, status){
			// 			//then randomly select the recipename and push into the array.
			// 			console.log(url);
						
			// 		}).then( function (response){
			// 			console.log(cuisine + data.response); 
			// 		});
			// 	}

		},