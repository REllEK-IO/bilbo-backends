import axios from "axios";

const APIKEY = "&key=AIzaSyCDr_MewjPJFGJVYUaj3RBy1E7rpE5nxR4";
const QUERYURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var places = (function () {
	var getPlaces = function (query, lat, lng, radius, minPrice, maxPrice, ) {
		var searchQuery = query || "food";
		var latitude = lat || 32.792095;
		var longitude = lng || -117.232337;
		var searchRadius = radius || 10000;
		var searchMinPrice = minPrice || 0;
		var searchMaxPrice = maxPrice || 4;

		const STRUCTURED_QUERY = QUERYURL + "&location=" + latitude + "," + longitude + "&query=" + encodeURI(searchQuery) + "&radius=" + searchRadius +
			"&opennow=true" + "&minprice=" + searchMinPrice + "&maxprice=" + searchMaxPrice + APIKEY;
		axios.get(STRUCTURED_QUERY, {headers: {
	  'Access-Control-Allow-Origin': '*',
	}})
			.then(function (response) {
				console.log(STRUCTURED_QUERY)
				return response;
			})
			.catch(function (error) {
				return error;
			});
	}
	return ({
		getPlaces: getPlaces
	});
})();

export default places;