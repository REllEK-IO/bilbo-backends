import React, {	Component} from 'react';

class MarkerBlock extends Component{
	constructor(props){
		super(props);

		this.state = {
			title : this.props.title || "No title",
			img : this.props.img || "#"
		}
	}

	render(){
		return(
			<div className={"col-lg-12"}>
				<img src={this.state.img} className={"img-thumbnail"} />
				<h1>{this.state.title}</h1>
			</div>
		)
	}
}

export default MarkerBlock;