import React from "react";

class Area extends React.Component {
    render() {
        return (
          <div id="area">
            Where do you want to eat?
            <input type="text" placeholder="Neighborhood, ZIP, Address" />
          </div>
        );
    }
};

export default Area;