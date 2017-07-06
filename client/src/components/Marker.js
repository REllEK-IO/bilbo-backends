import {	Component } from 'react';

class Marker extends Component {
	constructor(props){
		super(props);

		this.state = {
			mapObj : undefined,
			markerObj : undefined
		}
	}

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
				if(this.props.mapObj){
					this.setState({
						mapObj : this.props.mapObj
					})

					this.renderMarker();
				}
    }
  }

	renderMarker() {
		if(this.state.mapObj){
			let {
				map, position, mapCenter
			} = this.props;

			var map = this.props.mapObj;

			let pos = position || mapCenter;
			console.log("%^%^%   ", pos);
			position = new window.google.maps.LatLng(pos.lat, pos.lng);

			const pref = {
				map: map,
				position: position
			};

			console.log("map obj", map);
			var marker = new window.google.maps.Marker(pref);

			this.setState({
				markerObj : marker
			})
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