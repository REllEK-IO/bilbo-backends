import {	Component } from 'react';

class Marker extends Component {
	constructor(props){
		super(props);

		this.state = {
			mapObj : this.props.mapObj || undefined,
			markerObj : undefined,
			position : this.props.position || undefined
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