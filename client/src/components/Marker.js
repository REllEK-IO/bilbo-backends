import {	Component } from 'react';

class Marker extends Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
				console.log("Marker update was called" );
        this.renderMarker();
    }
  }

	renderMarker() {
		if(window.google){
			let {
				map, position, mapCenter
			} = this.props;

			let pos = position || mapCenter;
			console.log("%^%^%   ", pos);
			position = new window.google.maps.LatLng(pos.lat, pos.lng);

			const pref = {
				setMap: map,
				position: position
			};

			this.marker = new window.google.maps.Marker(pref);
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