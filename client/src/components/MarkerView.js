import React, {	Component } from 'react';

class MarkerView extends Component{
	  renderChildren() {
			const {children} = this.props;
			
			if (!children) return;
			console.log("$$$ ", children);
			return React.Children.map(children, c => {
				return React.cloneElement(c, {
					map: this.map,
					google: this.props.google
				});
			})
  	}
		
		render(){
			if(!this.props.children){
				return null;
			}
			else{
				return(
					<div className={"row bg-info"}>
						<div className={"offset-lg-1 col-lg-10 bg-faded"}>
							{this.renderChildren()}
						</div>
					</div>
				);
			}
		}
}

export default MarkerView;