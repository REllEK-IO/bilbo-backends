var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
	location:{
		lat: Number,
		lng: Number
	},
	icon: String,
	place_id: STRING,
	rating: Number,
	reviews: [{
		author: String,
		author_url:String,
		profile_photo: String,
		rating: Number,
		relative_time_desc: String,
		text: String,
		time: Number
	}],
	google_maps_url: String,
	website: String,
	address: String,
	phone_number: String,
	photos: [String]
});

module.exports = mongoose.model('PLace', placeSchema);