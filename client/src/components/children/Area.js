import React from "react";

class Area extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(this.state.quote)
  }
    render() {
        return (
          <div className={"offset-lg-2 col-lg-4"} id="area">     
            Where do you want to eat?
                <input id="location" value={this.state.quote} placeholder="Area Name, Address or ZIP" />
          </div>
        );
    }
};

export default Area;