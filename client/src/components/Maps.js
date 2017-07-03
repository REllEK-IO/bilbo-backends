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
  map;

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
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
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
        styles: styled
      })
			
      this.map = new maps.Map(node, mapConfig);
      // window.google.maps.map = this.map;
      
      //events
      const evtNames = ["dragend"];

      evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });
    }
	}

  recenterMap() {
    const map = this.map;
    const lat = this.state.lat;
    const lng = this.state.lng;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(lat, lng)
        map.panTo(center)
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = evtName;
    console.log("Setting Event: " + evtName);
    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 1000);
    }
  }

  renderChildren() {
    const {children} = this.props;
    
    if (!children) return;
    console.log("$$$ ", children);
    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.props.initialCenter
      });
    })
  }

  render() {
    const style = {
      height: "100%",
      width: "100%"
    }
    return (
      <div style={style} ref='map'>
        Loading Map...
        {this.renderChildren()}
      </div>
    )
  }
}

export default Maps;