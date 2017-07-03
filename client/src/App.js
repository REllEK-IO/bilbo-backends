import React, { Component  } from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/children/Navbar";
// import YoutubeBlock from './components/children/YoutubeBlock'
import Demo from './components/Demo';
// import Mapper from './components/Map';
import GoogleMaps from './components/GoogleMaps'
import WordCloud from './components/WordCloud'
import Area from './components/children/Area'
import Price from './components/children/Price'
import Footer from './components/children/Footer'

//helpers
import places from "./helpers/googlePlaces";

const AnyReactComponent = ({ text }) => <div style={{
    position: 'absolute', color: 'white', background: 'red',
    height: 40, width: 60    
  }}>{text}</div>;

class App extends Component{
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    
    //Gets current time and continuously updates
    this.setTime();
    places.getPlaces().then((response)=> {
      this.setMarkers(response);
    });

    window.setInterval(function () {
      this.setTime();
    }.bind(this), 10000);

    ////priceLevel
    //1 - 4 sets current return to this exact range
    //0 sets to all
    var randomSizeList = function(){
      var foodList = ["tacos","thai","seafood","gastro pub","california roll","mexican","cheese steak","eggs benedict","bakery","martini","pho","bbq chicken pizza","sushirrito","dim sum","fruit salad","vegan sandwich","hot wings","waffles","green smoothie","gelato"];
      var objFoodList = [];
      var max = 35;
      var min = 12;

      for(var i = 0; i < foodList.length; i++){
        objFoodList.push({
          value : foodList[i],
          count : Math.floor(Math.random() * (max - min)) + min 
        })
      }

      return objFoodList;
    }
    var food = randomSizeList();
    console.log(food);
    var initialMarkerObj = {
      "geometry": {
        "location": {
          "lat": 32.74752299999999,
          "lng": -117.1601377
        },
        "viewport": {
          "northeast": {
            "lat": 32.74886858029149,
            "lng": -117.1589314197085
          },
            "southwest": {
            "lat": 32.7461706197085,
            "lng": -117.1616293802915
          }
        }
      },

      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "33b3327d5ecab8d58f49ca9f38270b8430c98b48",
      "name": "La Vecindad Neighborhood TACOS",
      "opening_hours": {
      "open_now": true,
      "weekday_text": []
      },
      "photos": [
      {
      "height": 5312,
      "html_attributions": [
      "<a href=\"https://maps.google.com/maps/contrib/104464396591733731003/photos\">Cooper Nelson</a>"
      ],
      "photo_reference": "CmRaAAAAXMh88X9p1MAzSTkMzRbclKPV7mp00hj7W2fa8xmdgavXcSPORrx8kh6Js5GzQuGTxOBqLaTz9zyKAiPIsvqB5xnoHkW525Kkqmid_Z46LeW6MxKyj8NIH2qlMLMcs-t5EhCg7vEVZOiRIhzAnT8Ek2vmGhRi7k-b-PZAIgCTQtekxSGfFwwg3Q",
      "width": 2988
      }
      ],
      "place_id": "ChIJ23wLwNpU2YAR59BKIvCfXLk",
      "price_level": 1,
      "rating": 4.7,
      "reference": "CmRSAAAA-Jl8Jfxea5-RqxwJXztuBTXpXGV3hy3_PUa2Bfm5unxwwWEwHwZrT9rIHNZLA0keBL-TX9sl76KmclNP4ZaOCTtmjlDAE9tkpj5SaGVwurzp-hOnXPeviq-hqDXzIQHVEhARiwXVtS9Q-RSX-gyFbBOEGhRMy2ZKVP4MwhP9Ex8q5IWLi89edQ",
      "scope": "GOOGLE",
      "types": [
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
      ],
      "vicinity": "3827 Fifth Avenue, San Diego"
      };

    this.state = {
      priceLevel : [1,4],
      range : 10000,
      lat : 32.792095,
      lng : -117.232337,
      initWordCloud: food,
      markers: [initialMarkerObj]
    }
  }
  //Set current map markers
  setMarkers(data){
    // this.setState({
    //   markers : data.results
    // })
    console.log(this.state.markers, "fucker");
  }

  //Sets current time
  setTime(){
  
  	var currentdate = new Date();
  	var hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset);    

    // correct for number over 24, and negatives
    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 12; }

    // add leading zero, first convert hours to string
    hours = hours + "";
    if( hours.length == 1 ){ hours = "0" + hours; }

    // minutes are the same on every time zone
    var minutes = currentdate.getUTCMinutes();
  
    // add leading zero, first convert hours to string
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    console.log(hours, minutes)
    this.setState({
      hours: hours,
      minutes: minutes,
    });
  }

  getDefaultSearch(){
    if(this.state.hours > 5  && this.state.hours < 10){
      this.setState({
        defaultQuery : "breakfast"
      })
    }
    else if(this.state.hours >= 10   && this.state.hours < 12){
      this.setState({
        defaultQuery : "brunch"
      })
    }
    else if(this.state.hours >= 12 && this.state.hours > 17){
      this.setState({
        defaultQuery : "lunch"
      })
    }
    else if(this.state.hours >= 17 && this.state.hours > 20){
      this.setState({
        defaultQuery : "dinner"
      })
    }
    else if(this.state.hours >= 20 && this.state.hours > 24){
      this.setState({
        defaultQuery : "bars"
      })
    }
    else if(this.state.hours >= 0 && this.state.hours < 5){
      this.setState({
        defaultQuery : "fast food"
      })
    }
  }

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={() => 
          <div>
            <Navbar pageTitle={"Gopher That"} navItems={[{
                                          title : "test",
                                          link : "/test"
                                        },
                                        {
                                          title : "Github",
                                          link : "https://github.com/mtKeller/bilbo-backends"
                                        }]}/>
            <br />

            <div className="offset-1 col-lg-10">
              <WordCloud className="text-center" init={this.state.initWordCloud}/>
            </div>

            <div id="couple">
              <img id="couple-pic" src="http://i.imgur.com/xO9lzhB.png"></img>
            </div>

            <div id="map-container">
              <div className={"row text-center"} id="area-price">
                <div className={"offset-lg-2 col-lg-4"} id="area">     
                  <Area />
                </div>

                <div className={"col-lg-4"} id="price">          
                  <Price />
                </div>
              </div>

              <div className={"row"}>
                <div className={"col-lg-1 kill-padding"}>
                  <button className="btn btn-outline-primary btn-sm float-lg-right square">
                    <i className={"fa fa-bars"} aria-hidden={"true"}/>
                  </button>
                </div>
                <div className={"col-lg-11 kill-padding"}>
                  <GoogleMaps lat={this.state.lat} lng={this.state.lng}>
                        <AnyReactComponent
                          lat={this.state.lat}
                          lng={this.state.lng}
                          text={"TEST"}
                        />
                  </GoogleMaps>
                </div>
                
              </div>
              <Footer />
            </div>
          </div>
        }/>
      </Switch>
    </Router>)
  };
}
export default App;
