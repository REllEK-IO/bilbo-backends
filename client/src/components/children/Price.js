import React from "react";

class Price extends React.Component {
    render() {
        return (
            <div id="price">
                How much do you want to spend?
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
            </div>
        );
    }
};

export default Price;