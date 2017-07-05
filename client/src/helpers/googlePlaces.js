import axios from "axios";

const APIKEY = "&key=AIzaSyC2Psvmdv8oTjN7-JIUCPePFhf9TGv4ed0";
const QUERYURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var places = (function () {
	var getPlaces = function (PLACES_QUERY) {
		var searchQuery = PLACES_QUERY.query || "food";
		var latitude = PLACES_QUERY.lat || 32.792095;
		var longitude = PLACES_QUERY.lng || -117.232337;
		var searchRadius = PLACES_QUERY.radius || 10000;
		var searchMinPrice = PLACES_QUERY.minPrice || 0;
		var searchMaxPrice = PLACES_QUERY.maxPrice || 4;

		const STRUCTURED_QUERY = QUERYURL + "&location=" + latitude + "," + longitude + "&keyword=" + encodeURI(searchQuery) + "&radius=" + searchRadius +
			"&opennow=true&minprice=" + searchMinPrice + "&maxprice=" + searchMaxPrice + APIKEY;

		console.log(STRUCTURED_QUERY);

		var getCall = axios.get(STRUCTURED_QUERY)
			.then(function (response) {
				console.log(STRUCTURED_QUERY)
				return response;
			})
			.catch(function (error) {
				return error;
			});
		
		return getCall;
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

	var getDetails = function(ID){
		if(ID){
			const QUERY_URL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + ID + APIKEY;
			var getCall = axios.get(QUERY_URL)
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