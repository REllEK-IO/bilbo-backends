import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

var styled = [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": 0
            },
            {
                "hue": "#e7ecf0"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            }
        ]
    }
]

const mapOptions = {
	styles: styled // straight out of something like snazzymaps
};

export default class GoogleMap extends Component {
  constructor(props){
      super(props);

      this.state = {
          lat : this.props.lat,
          lng : this.props.lng,
          center : {lat: this.props.lat, lng: this.props.lng}
      }
  }
  static defaultProps = {
    center: {lat: 32.792095, lng: -117.232337},
    zoom: 15
		// defaultOptions:{{ styles: styled }}
  };

	
 
  render() {
    return (
			<div className={"col-lg-12 map-box"}>
      <GoogleMapReact
        defaultCenter={this.state.center}
        defaultZoom={this.props.zoom}
				options={mapOptions}
      />
			</div>
    );
  }
}