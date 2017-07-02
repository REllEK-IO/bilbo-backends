import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';

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

class Maps extends Component {
  constructor(props) {
    super(props);

    console.log("%%%%%     % ", this.props.initialCenter.lat);

    this.state = {
        lat: (this.props.initialCenter.lat !== undefined)? this.props.initialCenter.lat : 0,
        lng: (this.props.initialCenter.lng !== undefined)? this.props.initialCenter.lng : 0
    }
  }

	componentDidMount() {
    this.loadMap();
  }
	
	componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

	loadMap() {
		console.log("%%% " + (this.props !== undefined && this.props.google !== undefined));
    if (this.props !== undefined && this.props.google !== undefined) {
      // google is available
      const google = this.props.google;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);


      let zoom = 14;
      let lat = this.state.lat;
      let lng = this.state.lng;

      console.log("%%^%^% " + lat, lng);

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
        styles : styled
      })
			
      this.map = new maps.Map(node, mapConfig);
    }
	}

  render() {
    const style = {
      height: "100%",
      width: "100%"
    }
    return (
      <div style={style} ref='map'>
        Test
      </div>
    )
  }
}

export default Maps;