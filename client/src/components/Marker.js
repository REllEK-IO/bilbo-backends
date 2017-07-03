import React, {	Component } from 'react';

class Marker extends Component {
  componentDidUpdate(prevProps) {
    // if ((this.props.map !== prevProps.map) ||
    //   (this.props.position !== prevProps.position)) {
    //     this.renderMarker();
    // }
		this.renderMarker();
  }

	renderMarker() {
		let {
			map, position, mapCenter, google
		} = this.props;

		let pos = position || mapCenter;
		position = new google.maps.LatLng(pos.lat, pos.lng);

		const pref = {
			map: map,
			position: position
		};

		this.marker = new google.maps.Marker(pref);
	}

	render() {
    return (
			null
		);
  }
}

export default Marker;