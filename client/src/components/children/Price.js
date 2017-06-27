import React from "react";

class Price extends React.Component {
    render() {
        return (
            <div id="price">
                How much do you want to spend?
                  <div>
                    <input type="radio" name="emotion" id="sad" className="input-hidden" />
                    <label htmlFor="sad">
                      <img src="http://i.imgur.com/4yXfR8q.png"/>
                    </label>

                    <input type="radio" name="emotion" id="happy" className="input-hidden" />
                    <label htmlFor="happy">
                      <img src="http://i.imgur.com/gfVmwin.png"/>
                    </label>

                    <input type="radio" name="emotion" id="neutral" className="input-hidden" />
                    <label htmlFor="neutral">
                      <img src="http://i.imgur.com/MoWpFGw.png"/>
                    </label>
                  </div>
            </div>
        );
    }
};

export default Price;