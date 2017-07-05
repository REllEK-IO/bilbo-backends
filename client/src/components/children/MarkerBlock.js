import React, {	Component} from 'react';
import places from '../../helpers/googlePlaces';

class MarkerBlock extends Component{
	constructor(props){
		super(props);

		this.state = {
			title : this.props.title || "No title",
			getImg : this.props.img || "#",
			img : "#"
		}
		
	}

	componentDidMount(){
		var self = this;

		if(this.props.getImg !== "#"){
			places.getPhoto(this.props.getImg)
				.then((response) => {
					self.setState({
						img : response
					})
					console.log("Check response at MarkerBlock get url " + typeof self.state.img);
				})
				.catch((error)=>{
					console.log("Error fetching places image");
				})
		}
	}

	render(){
		return(
			<div className={"col-lg-12"}>
				<img alt={this.state.title} src={this.state.img} className={"img-thumbnail"} />
				<h1>{this.state.title}</h1>
			</div>
		)
	}
}

export default MarkerBlock;