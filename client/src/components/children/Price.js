import React from "react";
import ReactTooltip from 'react-tooltip';

class Price extends React.Component {
    constructor(props) {
    // This super(props) line lets us access our parents properties as props.
    super(props);
    this.state = {
      priceLevel: 4
    }
    this.handlePrice = this.handlePrice.bind(this);
  }
  handlePrice(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log("Max Price Level:", newState.priceLevel);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.priceLevel !== this.state.priceLevel){
      this.props.handlePriceChange(this.state.priceLevel);
    }
  }

    render() {
        return (
          <form id="price">
            <div id="dollar-signs">

              <input type="radio" name="priceLevel" id="single" className="input-hidden" onClick={this.handlePrice} value={1}/>
              <label htmlFor="single">
                <img id = "singleimg" alt="cheap" src="http://i.imgur.com/R4tQY0v.png"/>
              </label>

              <input type="radio" name="priceLevel" id="double" className="input-hidden" onClick={this.handlePrice} value={2}/>
              <label htmlFor="double">
                <img id = "doubleimg" alt="average" src="http://i.imgur.com/gfVmwin.png"/>
              </label>

              <input type="radio" name="priceLevel" id="triple" className="input-hidden" onClick={this.handlePrice} value={3}/>
              <label htmlFor="triple">
                <img id = "tripleimg" alt="expensive" src="http://i.imgur.com/MoWpFGw.png"/>
              </label>

              <input type="radio" name="priceLevel" id="quadruple" className="input-hidden" onClick={this.handlePrice} value={4}/>
              <label htmlFor="quadruple">
                <img id = "quadimg" alt="very expensive" src="http://i.imgur.com/JOuWSl3.png"/>
              </label>

                <a id="question-marks" data-tip data-for='price-mark'><img id="more-info" alt="More Info" src="https://image.flaticon.com/icons/png/512/0/827.png"/></a>
                  <ReactTooltip place='right' id='price-mark' type='info' effect="solid">
                    <span>What's the max price level you're willing to spend?</span>
                  </ReactTooltip>

            </div>
          </form>

      )
    }
};

export default Price;