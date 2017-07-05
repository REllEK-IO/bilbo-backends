import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class BootstrapNavbar extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      isOpen : false,
			toggle : this.toggle.bind(this),
			pageTitle : this.props.pageTitle || "Navbar",
			navItems : this.props.navItems || null
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
	generateNavItem(item){
		// if((this.props.link).indexOf("http") === -1){
		// 	item.link = "/" + item.item;
		// }
		
		return (
			<NavItem key={item.title}>
				<NavLink href={item.link}>{item.title}</NavLink>
			</NavItem>
		);
	}
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <img id="gopher" alt={"gopher"} src="http://www.evanmiller.org/images/go-gopher3.png"></img>
  
          <NavbarToggler right onClick={this.state.toggle} />
          <NavbarBrand href="/">{this.state.pageTitle}</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
            	{(this.state.navItems === null)? "" : this.state.navItems.map(this.generateNavItem)}
						</Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BootstrapNavbar;