import React, {	Component} from 'react';
import places from '../../helpers/googlePlaces';

class MarkerBlock extends Component{
	constructor(props){
		super(props);
		// this.getDetails();

		this.state = {
			title : this.props.title || "No title",
			img : "#",
			id : this.props.placeId
		} 
	}

	// componentDidMount(){
	// 	var self = this;

	// 	if(this.props.getImg !== "#"){
	// 		places.getPhoto(this.props.getImg)
	// 			.then((response) => {
	// 				self.setState({
	// 					img : response
	// 				})
	// 				console.log("Check response at MarkerBlock get url " + typeof self.state.img);
	// 			})
	// 			.catch((error)=>{
	// 				console.log("Error fetching places image");
	// 			})
	// 	}
	// }

	getDetails(){
		var self = this;
		places.getDetails(self.props.id)
			.then((response) =>{
				self.setState({
					details : response
				})
			})
	}

	render(){
		return(
			<div className={"row marker-block"}>
				<div className={"col-lg-2"}>
					<img alt={this.state.title} src={this.state.img} className={"img-thumbnail"} />
				</div>
				<div className={"col-lg-10"}>
					<h3>{this.state.title}</h3>
				</div>
			</div>
		)
	}
}

export default MarkerBlock;