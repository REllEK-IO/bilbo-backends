import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import 'bootstrap/dist/css/bootstrap.css';
import Reload from './children/Reload'

const options = {
  luminosity: 'medium',
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
      <TagCloud minSize={15}
                maxSize={35}
                colorOptions={options}
                tags={this.state.wordCloudValue}
                style={{width: 550, textAlign: 'center'}}
                className="myTagCloud center-block text-center" />
                <Reload />
      </div>
    );
  }
}
export default WordCloud;