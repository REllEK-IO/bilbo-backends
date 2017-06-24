import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Mapper extends Component{
	constructor(props){
		super(props);
		this.state = {
			markers : []
		}
	}

	render(){
		return (
			<GoogleMap
				defaultZoom={3}
				defaultCenter={{lat:-25.363882,lng: 131.044922}}>
				{this.state.markers.map((marker, index) =>(
					<Marker {...marker} />
				))}
				{console.log("testing!!!!!!!!!!!!!!")}
			</GoogleMap>
		);
	};
};

export default withGoogleMap(Mapper);