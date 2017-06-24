import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

class BootstrapNavItem extends React.Component {
  constructor(props) {
    super(props);

		var newLink;

		if((this.props.link).indexOf("http") === -1){
			newLink = "/" + this.props.item;
		}
		else{
			newLink = this.props.link;
		}
		this.state = {
      item : this.props.item,
			link : newLink
    };
  }
  render() {
    return (
			<NavItem>
				<NavLink href={this.state.link}>{this.state.item}</NavLink>
			</NavItem>
    );
  }
}

export default BootstrapNavItem;