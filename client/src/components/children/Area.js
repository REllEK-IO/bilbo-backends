// update state for range and price value
// make it so that the buttons update those variables

import React from "react";

class Area extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      range: 3000
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log("Previous range value:", this.state.range);
  }

    render() {
        return (
          <form id="area">
            <div id="dollar-signs">
              <input type="radio" name="range" id="walk" className="input-hidden" value={1000} onChange={this.handleChange}/>
              <label htmlFor="walk">
                <img id = "singleimg" alt="Walking Distance" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15371-200.png"/>
              </label>

              <input type="radio" name="range" id="bike" className="input-hidden" value={2000} onChange={this.handleChange}/>
              <label htmlFor="bike">
                <img id = "doubleimg" alt="Biking Distance" src="https://cdn3.iconfinder.com/data/icons/bikecons/512/bikecons_tri-512.png"/>
              </label>

              <input type="radio" name="range" id="car" className="input-hidden" value={3000} onChange={this.handleChange}/>
              <label htmlFor="car">
                <img id = "tripleimg" alt="Driving Distance" src="http://i.imgur.com/CqXp2vO.png"/>
              </label>
            </div>
          </form>
        );
    }
};

export default Area;