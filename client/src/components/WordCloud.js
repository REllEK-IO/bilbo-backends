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

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render(){
    const customRenderer = (tag, size, color) => (
      <span key={tag.value}
            className={"load-in"}
            style={{
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${size}px`,
              border: `2px solid ${color}`,
              margin: '3px',
              padding: '3px',
              display: 'inline-block',
              color: color,
            }}>{tag.value}</span>
    );

    return(
      <div className={"col-lg-12 word-box"}>
      <TagCloud onClick={this.props.handleClick}
                minSize={10}
                maxSize={30}
                colorOptions={options}
                tags={this.state.wordCloudValue}
                style={{width: 550, textAlign: 'center'}}
                shuffle={"true"}
                renderer={customRenderer}
                className="myTagCloud center-block text-center" />
                
                <Reload />
      </div>
    );
  }
}
export default WordCloud;