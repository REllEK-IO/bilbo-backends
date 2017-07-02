import Map from 'google-maps-react'

import MapsSidebar from "./children/MapsSidebar";

class Mapper extends Component{
	constructor(props){
		super(props);
		this.state = {
			markers : []
		}
	}

	render(){
		return (
			<div>
				<GoogleMap
					defaultZoom={3}
					defaultCenter={{lat:-25.363882,lng: 131.044922}}>
					{this.state.markers.map((marker, index) =>(
						<Marker {...marker} />
					))}
					{console.log("testing!!!!!!!!!!!!!!")}
				</GoogleMap>

			</div>
		);
	};
};React.createClass({
  fetchPlaces: function(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  },
  render: function() {
    return (
      <Map google={this.props.google}
        onReady={this.fetchPlaces}
        visible={false}>
          <Listing places={this.state.places} />
      </Map>
    )
  }
});

export default withGoogleMap(Mapper);