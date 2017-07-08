import React, { Component  } from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/children/Navbar";

import Container from './components/Container';

import WordCloud from './components/WordCloud'
import Area from './components/children/Area'
import Price from './components/children/Price'
import Footer from './components/children/Footer'
import MarkerView from './components/MarkerView'
import MarkerBlock from './components/children/MarkerBlock';
import Tabs from './components/children/Tabs';

//helpers
import places from "./helpers/googlePlaces";

class App extends Component{
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    
    //Gets current time and continuously updates
    
    
    

    ////priceLevel
    //1 - 4 sets current return to this exact range
    //0 sets to all
    var randomSizeList = function(){
      var foodList = ["tacos","thai","seafood","gastro pub","california roll","mexican","cheese steak","eggs benedict","bakery","martini",
                      "pho","bbq chicken pizza","sushirrito","dim sum","fruit salad","vegan sandwich","hot wings","waffles","green smoothie",
                      "gelato", "cheeseburger", "tapas", "ramen", "carnitas", "sashimi", "cupcakes", "chicken", "hot dogs", "pork belly", "lentils", 
                      "california burrito", "carne asada fries", "candy", "frozen yogurt", "pulled pork", "steak", "pizza", "lasagna", "teriyaki", "pastrami",
                      "kebab", "shawrma", "indian", "moroccan", "greek", "brazilian", "salmon", "crab", "lobster", "oysters", "tortas", "subs", "sandwiches",
                       "cappuccino", "chile", "cheese", "french toast", "naan", "chicken tikka masala", "fried chicken", "jerk chicken", "salad" ];
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
    // console.log(food);

    this.state = {
      priceLevel : 4,
      minPrice : 0,
      maxPrice : 4,
      range : 5000,
      defaultQuery : "food",
      markers: undefined,
      currentLocation: {lat: 32.85159468705687, lng: -117.18459944621583},
      searchHistory : [],
      appInit : false,
      initWordCloud: food,
      query : undefined,
      map : undefined,
      markerObjs : undefined
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation !== this.state.currentLocation) {
      console.log("update markers calleds", this.state.currentLocation);
      this.updateSearch()
    }
    else if(prevState.query !== this.state.query){
      console.log("query field updated", this.state.query);
      this.updateSearch()
    }
    else if(prevState.maxPrice !== this.state.maxPrice){
      console.log("price level updated", this.state.priceLevel);
      this.updateSearch()
    }
    else if(prevState.range !== this.state.range){
      console.log("range updated", this.state.range);
      this.updateSearch();
    }
  }

  componentDidMount(){
    if(!this.state.appInit){
      this.setTime();
      this.setLocation();

      window.setInterval(function () {
        this.setTime();
      }.bind(this), 10000);

      window.setTimeout(function(){
        this.setDefaultSearch();
      }.bind(this), 500)

      window.setTimeout(function(){
          // console.log("init", PLACES_QUERY.query);
          this.updateSearch();
      }.bind(this), 3000)
      
      // console.log("Old state: ", this.state.currentLocation);

      this.setState({
        appInit : true
      })
    }
  }

  updateSearch(distance_extend){
    var self = this;
    
    var timeout;

    var QUERY_BLOCK = {
      query : this.state.query || this.state.defaultQuery,
      lat : this.state.currentLocation.lat,
      lng : this.state.currentLocation.lng,
      radius : distance_extend || this.state.range,
      minPrice : 0,
      maxPrice : this.state.maxPrice
    }

    console.log("Updating search", QUERY_BLOCK);

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      places.getPlaces(QUERY_BLOCK).then((response)=>{
        self.setMarkers(response);
        console.log("Setting new markers");
      }).catch((error)=>{
        console.log("Error updating new place search", error)
      })
    }, 1000);
  }

  //Set current map markers
  setMarkers(response){
    if(response.data.results !== undefined)
    {
      if(response.data.results.length < 1 && this.state.range < 2000){
        this.updateSearch("2000");
        console.log("Expanding search area to 2000");
      }
      else if(response.data.results.length < 1 && this.state.range < 10000){
        this.updateSearch("10000");
        console.log("Expanding search area to 10000");
      }
      else{
        var self = this;
        var arrRequest = Object.keys(response.data.results).map((key => {
          return places.getDetails(response.data.results[key].place_id)
        }));

        axios.all(arrRequest)
          .then((allResponse)=>{
            var parsedResponse = Object.keys(allResponse).map((key)=>{
              if(allResponse[key].data.result){
                return allResponse[key].data.result;
              }
              else{
                return null
              }

              
            });

            // console.log("find all", parsedResponse)

            self.setState({
              markers : parsedResponse
            });
          })
          .catch(error => (console.log(error)));
      }
      }
    
    // console.log("$$$ Set Markers: " + this.state.markers);
  }

  //Sets current time
  setTime(){
  
  	var currentDate = new Date();
    //Set utc offset for PST
  	var hours = currentDate.getUTCHours() - 8;    
    // console.log("time", hours)
    // correct for number over 24, and negatives
    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 12; }

    // add leading zero, first convert hours to string
    // hours = String(hours);
    // if( hours.length === 1 ){ hours = "0" + hours; }

    // minutes are the same on every time zone
    var minutes = currentDate.getUTCMinutes();
  
    // add leading zero, first convert hours to string
    // minutes = minutes + "";
    // if( minutes.length === 1 ){ minutes = "0" + minutes; }

    // console.log("!!!! The time is: ",hours, minutes)
    this.setState({
      hours: hours,
      minutes: minutes,
    });
  }

  setLocation(){
    // console.log("setting location");
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords;
            this.setState({
                currentLocation: {
                    lat: (coords.latitude !== undefined)? coords.latitude : 32.792095,
                    lng: (coords.longitude !== undefined)? coords.longitude : -117.232337
                }
            })
        })
    }
  }

  setDefaultSearch(){
    if(this.state.hours > 5  && this.state.hours < 10){
      this.setState({
        defaultQuery : "breakfast",
        searchHistory : this.state.searchHistory.push("breakfast")
      })
    }
    else if(this.state.hours >= 10   && this.state.hours < 12){
      this.setState({
        defaultQuery : "brunch",
        searchHistory : this.state.searchHistory.push("brunch")
      })
    }
    else if(this.state.hours >= 12 && this.state.hours < 17){
      this.setState({
        defaultQuery : "lunch",
        searchHistory : this.state.searchHistory.push("lunch")
      })
    }
    else if(this.state.hours >= 17 && this.state.hours < 20){
      this.setState({
        defaultQuery : "dinner",
        searchHistory : this.state.searchHistory.push("dinner")
      })
    }
    else if(this.state.hours >= 20 && this.state.hours < 24){
      this.setState({
        defaultQuery : "bars",
        searchHistory : this.state.searchHistory.push("bars")
      })
    }
    else if(this.state.hours >= 0 && this.state.hours < 5){
      this.setState({
        defaultQuery : "fast food",
        searchHistory : this.state.searchHistory.push("fast food")
      })
    }
    // console.log("default", this.state.hours, this.state.defaultQuery);
  }

  setPos(newCenter){
    // console.log("New center: " + Object.keys(newCenter).map((key)=>(newCenter[key])));
    this.setState({
      currentLocation: newCenter
    })
  }

  handlePosChange(newCenter){
    // console.log("Position changed in Maps passed to APP Success", newCenter);
    this.setPos({lat : newCenter.lat(), lng : newCenter.lng()});
  }

  authUser(){
    axios.get("/auth/google")
      .then((response)=>(console.log(response)))
      .catch((error)=>(console.log(error)));
  }

  renderMarkerBlocks(){
    if(this.state.markers){

      var blocks = this.state.markers.map((place)=>{
        // console.log("place id", place.place_id);
        var block = (
              <MarkerBlock place={place} />
        );
        // console.log("phone",place.formatted_phone_number);
        return block;
      });
      return blocks;
    }
    else{
      return (<div></div>);
    }
  }
  handleRangeChange(newRange){
    this.setState({
      range : newRange
    });
  }
  
  handlePriceChange(newPrice){
    this.setState({
      maxPrice : newPrice
    });
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
                                        }]} />
            <br />
            <div className={"row"}>
              <div className={"offset-lg-10 col-lg-2"}> 
                <button onClick={this.authUser} style={{"margin-right":"20px"}} className="btn btn-outline-danger float-lg-right"><span className={"fa fa-google-plus"}>Google</span></button>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-10 col-sm-1">
              <WordCloud handleClick={function(e){this.setState({"query":e.value}); console.log("query", this.state.query)}.bind(this)} className="text-center" init={this.state.initWordCloud}/>
            </div>

            <div id="map-container">
              <div className={"row text-center"} id="area-price">
                <div className={"offset-lg-2 col-lg-4"} id="area">     
                  <Area handleRangeChange={this.handleRangeChange.bind(this)}/>
                </div>

                <div className={"col-lg-4"} id="price">          
                  <Price handlePriceChange={this.handlePriceChange.bind(this)} />
                </div>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-lg-12"}>
                <Container handlePosChange={this.handlePosChange.bind(this)} markers={this.state.markers} updatePosition={this.setPos.bind(this)} initialCenter={this.state.currentLocation} />
              </div>
              
            </div>
            <Tabs query={this.state.query || this.state.defaultQuery} />
            <MarkerView>
              {this.renderMarkerBlocks()}
            </MarkerView>
            <Footer />
          </div>
        }/>
      </Switch>
    </Router>)
  };
}
export default App;


// todo:
// updateMapInfo={this.handleMapInfo.bind(this)}
