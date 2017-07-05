import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";

const options = {
  luminosity: 'light',
  hue: 'blue'
};
 
class WordCloud extends Component{
  constructor(props){
    super(props);

    this.state = {
      wordCloudValue : this.props.init
    }
  };

  render(){
    return(
      <div className={"col-lg-12 word-box"}>
      <TagCloud minSize={12}
                maxSize={35}
                colorOptions={options}
                tags={this.state.wordCloudValue}
                style={{width: 500, textAlign: 'center'}}
                className="myTagCloud center-block text-center" />
      </div>
    );
  }
}
export default WordCloud;