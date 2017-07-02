import React ,{ Component} from 'react';
import Maps from './Maps'
import {GoogleApiWrapper} from 'google-maps-react';

class Container extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '200px'
    }
    return (
      <div style={style}>
        <Maps initialCenter={this.props.initialCenter} google={window.google}
          />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD98nxotdxRqVB9UwLUS-lq_HABOe0j0qU"
})(Container);