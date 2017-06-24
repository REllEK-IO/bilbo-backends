import React from "react";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/children/Navbar";
// import YoutubeBlock from './components/children/YoutubeBlock'
import Demo from './components/Demo';
import Mapper from './components/Map';

const App = () => (
  <Router>
  <Switch>
      <Route exact path="/" children={() => 
        <div>
          <Navbar pageTitle={"Zen"} navItems={[{
                                        title : "test",
                                        link : "/test"
                                      },
                                      {
                                        title : "Github",
                                        link : "https://github.com/mtkeller/"
                                      }]}/>

          <div className="offset-1 col-lg-10">
            <Mapper
              containerElement={<div style={{height:100 + '%', width: 100 + '%'}} />}
              mapElement={<div style={{height:100 + '%', width: 100 + '%'}} />}
            />
          </div>
        </div>
      }/>
    </Switch>
  </Router>
);

export default App;
