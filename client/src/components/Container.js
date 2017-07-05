import React ,{ Component} from 'react';
import Maps from './Maps';
import Marker from "./Marker";
import {GoogleApiWrapper} from 'google-maps-react';

class Container extends Component {
  render() {
    const style = {
      width: '100%',
      height: '250px'
    }
    return (
      <div style={style}>
        <Maps dragend={function(props,map,evt) {var newCoords = map.getCenter(); props.updatePosition({lat: newCoords.lat(), lng: newCoords.lng()})}} updatePosition={this.props.updatePosition} initialCenter={this.props.initialCenter} google={window.google}>
					<Marker />
					<Marker position={this.props.initChildren} />
				</Maps>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD98nxotdxRqVB9UwLUS-lq_HABOe0j0qU",
  version: 3.27
})(Container);