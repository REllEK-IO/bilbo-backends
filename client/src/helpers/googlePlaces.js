import axios from "axios";

const APIKEY = "&key=AIzaSyDRaoZ3jH6dDSmIfE4KIT28F0MVz9otGKQ";

const QUERYURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var places = (function () {
	var getPlaces = function (PLACES_QUERY) {
		// console.log("Get places", STRUCTURED_QUERY);
		if(PLACES_QUERY){
			var getCall = axios.get("/api/place/", {params: {place:PLACES_QUERY}})
			.then(function (response) {
				console.log("test", response);
				return response;
			})
			.catch(function (error) {
				return error;
			});
		
		return getCall;
		}
		else{
			return null;
		}
	}
	var getPhoto = function(PHOTO_REFERENCE){
		if(PHOTO_REFERENCE !== undefined || PHOTO_REFERENCE !== null || PHOTO_REFERENCE !== "undefined"){
			const QUERY_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference="
		+ PHOTO_REFERENCE + APIKEY;

		console.log(QUERY_URL);

		var getCall = axios.get(QUERY_URL)
			.then(function (response) {
				console.log("From photo get: " + response);
				// ,
				return  "data:image/png;base64" + String(response.data);
			})
			.catch(function (error) {
				return error;
			});
		
		return getCall;
		}
		else{
			return null;
		}
	}

	var getDetails = function(PLACE_ID){
		if(PLACE_ID !== undefined){
			var getCall = axios.get("/api/placeid/",{params:{id:PLACE_ID}})
				.then(function (response) {
					console.log("Stack Request for details " + response)
					return response;
				})
				.catch(function (error) {
					return error;
				});		
			return getCall;
		}
		else{
			return null;
		}
	}
	return ({
		getPlaces : getPlaces,
		getPhoto : getPhoto,
		getDetails : getDetails
	});
})();

export default places;