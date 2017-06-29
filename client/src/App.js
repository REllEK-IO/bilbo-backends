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

class App extends Component{
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
    
    //Gets current time and continuously updates
    this.setTime();
    
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

    this.state = {
      priceLevel : 0,
      range : 0,
      lat : 32.792095,
      lng : -117.232337,
      initWordCloud: food
    }
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
            <Navbar pageTitle={"GopherThat"} navItems={[{
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
                <GoogleMaps lat={this.state.lat} lng={this.state.lng} />
              </div>
            </div>
            <Footer />

          </div>

        }/>
      </Switch>
    </Router>)
  };
}
export default App;
