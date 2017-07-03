// update state for range and price value
// make it so that the buttons hpdate those variables

import React from "react";

class Area extends React.Component {
    constructor(props) {
    // This super(props) line lets us access our parents properties as props.
    super(props);
    this.state = {
      range: 0
    }
  }
    render() {
        return (
          <form id="area">
            <div id="dollar-signs">
              <input type="checkbox" name="close" id="walk" className="input-hidden" value="1000"/>
              <label htmlFor="walk">
                <img id = "singleimg" src="https://d30y9cdsu7xlg0.cloudfront.net/png/15371-200.png"/>
              </label>

              <input type="checkbox" name="near" id="bike" className="input-hidden" value="2000"/>
              <label htmlFor="bike">
                <img id = "doubleimg" src="https://cdn3.iconfinder.com/data/icons/bikecons/512/bikecons_tri-512.png"/>
              </label>

              <input type="checkbox" name="far" id="car" className="input-hidden" value="3000"/>
              <label htmlFor="car">
                <img id = "tripleimg" src="http://www.iconsdb.com/icons/preview/black/car-xxl.png"/>
              </label>
            </div>
          </form>
        );
    }
};

export default Area;