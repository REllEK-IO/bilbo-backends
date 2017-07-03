import React, { Component } from 'react';

class Mapper extends Component{
	render(){
		return (
			<div>
				<button className="btn btn-outline-primary btn-sm float-lg-right square">
        	<i className={"fa fa-bars"} aria-hidden={"true"}/>
        </button>
			</div>
		);
	};
};

export default withGoogleMap(Mapper);