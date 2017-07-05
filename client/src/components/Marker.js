import {	Component } from 'react';

class Marker extends Component {
	
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }

	renderMarker() {
		if(this.props.google){
			let {
				map, position, mapCenter, google
			} = this.props;

			let pos = position || mapCenter;
			console.log("%^%^%   ", pos);
			position = new google.maps.LatLng(pos.lat, pos.lng);

			const pref = {
				setMap: map,
				position: position
			};

			this.marker = new google.maps.Marker(pref);
			console.log(this.marker, "^^^^^^^^^^^^^6");
		}
	}

	render() {
    return (
			null
		);
  }
}

export default Marker;