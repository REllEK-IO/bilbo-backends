import React from "react";
import ReactTooltip from 'react-tooltip';

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 10000
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log("Range State: Within", newState.range, "meters");
  }
  render() {
      return (
        <form id="area">
          <div id="distance-signs">

            <input type="radio" name="range" id="walk" className="input-hidden" value={1000} onClick={this.handleChange}/>
            <label htmlFor="walk">
              <img id = "singleimg" alt="Walking Distance" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15371-200.png"/>
            </label>

            <input type="radio" name="range" id="bike" className="input-hidden" value={2000} onClick={this.handleChange}/>
            <label htmlFor="bike">
              <img id = "doubleimg" alt="Biking Distance" src="https://cdn3.iconfinder.com/data/icons/bikecons/512/bikecons_tri-512.png"/>
            </label>

            <input type="radio" name="range" id="car" className="input-hidden" value={10000} onClick={this.handleChange}/>
            <label htmlFor="car">
              <img id = "tripleimg" alt="Driving Distance" src="http://i.imgur.com/CqXp2vO.png"/>
            </label>

            <a id="question-marks" data-tip data-for='area-mark'><img id="more-info" alt="More Info" src="https://image.flaticon.com/icons/png/512/0/827.png"/></a>
            <ReactTooltip place='right' id='area-mark' type='info' effect="solid">
              <span>Do you want something walking distance, biking distance, or driving distance?</span>
            </ReactTooltip>

          </div>
        </form>
      );
  }
};



export default Area;