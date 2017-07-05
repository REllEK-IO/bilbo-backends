import React, {	Component } from 'react';

class MarkerView extends Component{
	  renderChildren() {
			const CHILDREN = this.props.children;
			
			if (!CHILDREN) return;
			console.log("$$$ Render Children ", CHILDREN);
			var childrenList = React.Children.map(CHILDREN, c => {
				if(c){
					return React.cloneElement(c, {});
				}
			})

			return childrenList;
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