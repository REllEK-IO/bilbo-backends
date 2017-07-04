import axios from "axios";

const APIKEY = "&key=AIzaSyBBLDDJXchh7sPATHb2SSyZ_FFr_VQLqjU";
const QUERYURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var places = (function () {
	var getPlaces = function (query, lat, lng, radius, minPrice, maxPrice ) {
		var searchQuery = query || "food";
		var latitude = lat || 32.792095;
		var longitude = lng || -117.232337;
		var searchRadius = radius || 10000;
		var searchMinPrice = minPrice || 0;
		var searchMaxPrice = maxPrice || 4;

		const STRUCTURED_QUERY = QUERYURL + "&location=" + latitude + "," + longitude + "&keyword=" + encodeURI(searchQuery) + "&" + "&radius=" + searchRadius +
			"&opennow=true" + "&minprice=" + searchMinPrice + "&maxprice=" + searchMaxPrice + APIKEY;

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
		const QUERY_URL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference="
		+ PHOTO_REFERENCE + APIKEY;

		console.log(QUERY_URL);

		var getCall = axios.get(QUERY_URL)
			.then(function (response) {
				return response;
			})
			.catch(function (error) {
				return error;
			});
		
		return getCall;
	}
	return ({
		getPlaces : getPlaces,
		getPhoto : getPhoto
	});
})();

export default places;