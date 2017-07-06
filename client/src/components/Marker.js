import {	Component } from 'react';

class Marker extends Component {
	constructor(props){
		super(props);

		var infoWindowContent = (
			'<div id="content">' +
				'<h3>Something</h3>' +
				'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quo assumenda molestias, ut quis maxime soluta quia ad eligendi nihil numquam saepe, praesentium, eum placeat harum asperiores magni vitae. Molestiae numquam laudantium illum asperiores expedita deserunt.</p>' +
			'</div>'
		);

		this.state = {
			mapObj : this.props.mapObj || undefined,
			markerObj : undefined,
			position : this.props.position || undefined,
			title : "Something",
			infoWindowContent : infoWindowContent
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
			console.log("Marker Mounted");
		}
	}
	componentWillUnmount(){
		this.state.markerObj.setMap(null);
	}

	renderMarker() {
		if(this.state.mapObj){
			var position = this.state.position;

			var map = this.state.mapObj;

			let pos = position;
			console.log("%^%^%   ", pos);
			position = new window.google.maps.LatLng(pos.lat, pos.lng);

			const pref = {
				map: map,
				position: position,
				title: this.state.title,
				animation: window.google.maps.Animation.DROP
			};

			console.log("map obj", map);
			var marker = new window.google.maps.Marker(pref);

			this.setState({
				markerObj : marker
			})

			var infoWindow = new window.google.maps.InfoWindow({
      	content: this.state.infoWindowContent
      });

			marker.addListener('click', function() {
      	infoWindow.open(map, marker);
      });

			this.props.storeMarkers(this.state.markerObj);

			console.log(this.state.markerObj, "^^^^^^^^^^^^^6");
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