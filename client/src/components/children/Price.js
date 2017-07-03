import React from "react";

class Price extends React.Component {
    constructor(props) {
    // This super(props) line lets us access our parents properties as props.
    super(props);
    this.state = {
      priceLevel: []
    }
  }
    render() {
        return (
                <form id="price">
                  <div id="dollar-signs">
                    <input type="checkbox" name="cheap" id="single" className="input-hidden" />
                    <label htmlFor="single">
                      <img id = "singleimg" src="http://i.imgur.com/R4tQY0v.png"/>
                    </label>

                    <input type="checkbox" name="average" id="double" className="input-hidden" />
                    <label htmlFor="double">
                      <img id = "doubleimg" src="http://i.imgur.com/gfVmwin.png"/>
                    </label>

                    <input type="checkbox" name="expensive" id="triple" className="input-hidden" />
                    <label htmlFor="triple">
                      <img id = "tripleimg" src="http://i.imgur.com/MoWpFGw.png"/>
                    </label>
                  </div>
                </form>
        );
    }
};

export default Price;