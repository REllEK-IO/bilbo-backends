import React ,{ Component} from 'react';
import Maps from './Maps'

class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '30vh'
    }
    return (
      <div style={style}>
        <Maps google={this.props.google}
          />
      </div>
    )
  }
}

export default Container;