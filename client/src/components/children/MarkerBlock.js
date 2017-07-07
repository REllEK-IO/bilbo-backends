import React, {	Component} from 'react';
import places from '../../helpers/googlePlaces';

class MarkerBlock extends Component{
	constructor(props){
		super(props);
		// this.getDetails();
		// placeId={place.place_id} image={place.icon} title={place.name} 
		// rating={place.rating} address={place.formatted_address} 
		// phone={place.formatted_phone_number}
		if(this.props.place){
				this.state = {
				title : this.props.place.name || "No title",
				img : this.props.place.icon,
				id : this.props.place.place_id,
				rating : this.props.place.rating,
				address : this.props.place.formatted_address || "No Address Found",
				phone : this.props.place.formatted_phone_number || "(XXX) XXX-XXXX",
				link : this.props.place.url || "#"
			} 
		}
	}

	componentDidUpdate(prevProps, prevStat){
		if(prevProps.place !== this.props.place){
			this.setState({
				title : this.props.place.name || "No title",
				img : this.props.place.icon,
				id : this.props.place.place_id,
				rating : this.props.place.rating,
				address : this.props.place.formatted_address || "No Address Found",
				phone : this.props.place.formatted_phone_number || "(XXX) XXX-XXXX",
				link : this.props.place.website || "#"
			});
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

	render(){
		if(this.props.place){
			return(
				<div className={"row marker-block"}>
					<div className={"col-lg-2"}>
						<img alt={this.state.title} src={this.state.img} className={"img-thumbnail"} />
					</div>
					<div className={"col-lg-2"}>
						<a href={this.state.link} target={"_blank"}><h3 className={"text-center"}>{this.state.title}</h3></a>
						<h3 className="float-lg-right">{this.state.rating}</h3>
					</div>
					<div className={"col-lg-8"}>
						<h3 className={"float-lg-right"}>{this.state.address}</h3>
						<br />
						<br />
						<h3 className="float-lg-right">{this.state.phone}</h3>
					</div>
				</div>
			)
		}
		else{
			return null;
		}
	}
		
}

export default MarkerBlock;