import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';

import Marker from './Marker';

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

    console.log(Object.keys(props).map((key)=>{
      return props[key];
    }));

    console.log("%%%%%     % ", this.props.initialCenter.lat);

    this.state = {
        lat: (this.props.initialCenter.lat !== undefined)? this.props.initialCenter.lat : 0,
        lng: (this.props.initialCenter.lng !== undefined)? this.props.initialCenter.lng : 0,
        mapObj: undefined,
        markerObjs: []
    }
  }

	componentDidMount() {
    this.loadMap();
  }
	
	componentWillUpdate(prevProps, prevState) {
    if(prevProps.markers !== this.props.markers){
      this.deleteMarkers();
    }
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
      // const google = this.props.google;
      // const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 13;
      let lat = this.state.lat;
      let lng = this.state.lng;

      console.log("%%^%^% " + lat, lng);

      const center = new window.google.maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
        styles: styled,
        scrollwheel: false
      })
			
      var mapObj = new window.google.maps.Map(node, mapConfig);
      // window.google.maps.map = this.map;
      
      //events
      const evtNames = ["dragend"];

      evtNames.forEach(e => {
        mapObj.addListener(e, this.handleEvent(e));
      });

      this.setState({
        mapObj: mapObj
      })

      // console.log("map call", this.state.map);
    }
	}

  storeMarkers(markerObj){
    this.setState({
      markerObjs : this.state.markerObjs.push(markerObj)
    })
  }

  deleteMarkers(){
    for(var i = 0; i < this.state.markerObjs.length; i++){
      this.state.markerObjs[i].setMap(null);
    }
    this.setState({
        markers : this.props.markers,
        markerObjs : []
    })
  }
  
  recenterMap() {
    // const map = this.map;
    const lat = this.props.initialCenter.lat;
    const lng = this.state.initialCenter.lng;

    // const google = this.props.google;
    // const maps = google.maps;

    if (this.state.mapObj) {
        let center = new window.google.maps.LatLng(lat, lng)
        this.state.mapObj.panTo(center)
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = evtName;
    // console.log("Setting Event: " + evtName);
    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (handlerName === "dragend") {
          this.handleDragend();
        }
      }, 1000);
    }
  }

  handleDragend(){
    // console.log("New center", this.state.mapObj.getCenter())
    var newCoords = this.state.mapObj.getCenter();
    this.props.handlePosChange(newCoords);
  }

  renderChildren() {

		var markerList;

		if(this.state.markers && this.state.mapObj){
      var index = 0;
			markerList = this.state.markers.map((mark)=>{
        var description = "";

        if(mark.reviews[0]){
          description = mark.reviews[0].text;
        }

        return (
          <Marker rating={mark.rating} 
                  description={description} 
                  storeMarkers={this.storeMarkers.bind(this)} 
                  title={mark.name} mapObj={this.state.mapObj} 
                  position={mark.geometry.location}/>
          );
			});
      // console.log("Marker List", markerList);
		  return markerList;
		}
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