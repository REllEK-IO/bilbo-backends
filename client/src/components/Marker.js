import {	Component } from 'react';

class Marker extends Component {
	constructor(props){
		super(props);

		var infoWindowContent = (
			'<div id="content" class="info-window">' +
				'<h3 class="text-center">' + this.props.title + '</h3>' +
				this.generateStars() +
				'<p style="text-align: center; font-size: 18px;">' + this.props.description + '</p>' +
			'</div>'
		);

		this.state = {
			mapObj : this.props.mapObj || undefined,
			markerObj : undefined,
			position : this.props.position || undefined,
			title : this.props.title,
			infoWindowContent : infoWindowContent,
			description: this.props.description
		}
	}

  componentDidUpdate(prevProps) {
    if ((this.props.mapObj !== prevProps.mapObj) ||
      (this.props.position !== prevProps.position)) {
				if(this.props.mapObj){
					this.setState({
						mapObj : this.props.mapObj,
						position : this.props.position
					})

					this.renderMarker();
				}
    }
  }

	componentDidMount(){
		if(this.state.mapObj && this.state.position){
			this.renderMarker();
			// console.log("Marker Mounted");
		}
	}
	componentWillUnmount(){
		this.state.markerObj.setMap(null);
	}

	generateStars(){
		if(this.props.rating){
			var stars = Math.floor(this.props.rating);
			var starRating = "<div style='text-align: center; font-size: 24px;'>";
			for(var i = 0; i < stars; i++){
				starRating += (
					'<i class="fa fa-star text-warning" aria-hidden="true"></i>'
				);
			}
			for(var i = 0; i < 5 - stars; i++){
				starRating += (
					'<i class="fa fa-star-o text-info" aria-hidden="true"></i>'
				);
			}
			return starRating + '</div>';
		}
		else{
			return '<h4 class="text-center">' + this.props.rating + '</h3>';
		}
	}

	renderMarker() {
		if(this.state.mapObj){
			var position = this.state.position;

			var map = this.state.mapObj;

			let pos = position;
			// console.log("%^%^%   ", pos);
			position = new window.google.maps.LatLng(pos.lat, pos.lng);

			const pref = {
				map: map,
				position: position,
				title: this.state.title,
				animation: window.google.maps.Animation.DROP
			};

			// console.log("map obj", map);
			var marker = new window.google.maps.Marker(pref);

			this.setState({
				markerObj : marker
			})

			var infoWindow = new window.google.maps.InfoWindow({
      	content: this.state.infoWindowContent
      });

			var self = this;

			marker.addListener('click', function() {
      	infoWindow.open(map, marker);
				window.location.hash = self.props.title;
      });

			this.props.storeMarkers(this.state.markerObj);

			// console.log(this.state.markerObj, "^^^^^^^^^^^^^6");
		}

		// console.log("map info", map);
	}

	render() {
    return (
			null
		);
  }
}

export default Marker;