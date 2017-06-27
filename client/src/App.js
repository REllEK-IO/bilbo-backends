import React from "react";
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

const App = () => (
  <Router>
  <Switch>
      <Route exact path="/" children={() => 
        <div>
          <Navbar pageTitle={"Food Maps"} navItems={[{
                                        title : "test",
                                        link : "/test"
                                      },
                                      {
                                        title : "Github",
                                        link : "https://github.com/mtkeller/"
                                      }]}/>
          <br />

          <div className="offset-1 col-lg-10">
            <WordCloud className="text-center" />
          </div>

          <div className={"row text-center"} id="area-price">
             <div className={"offset-lg-2 col-lg-4"} id="area">          
               <Area />
             </div>

             <div className={"col-lg-4"} id="price">          
               <Price />
             </div>
          </div>

          <button type="button" className="btn btn-primary">Submit</button>

          <GoogleMaps />
        
          <Footer />

        </div>

      }/>
    </Switch>
  </Router>
);

export default App;
