import React, {Component} from 'react';

class Tabs extends Component{
 constructor(props){
	super(props);

	this.state = {
		searchTabs : [this.props.query],
		activeTab : 0
	}
 }
 
 componentWillUpdate(prevProps, prevState){
	 var searchedLength = this.state.searchTabs.length;
   
	 var contains = false;
	 for(var i = 0; i < searchedLength; i++){
		 if(this.props.query === this.state.searchTabs[i]){
			 contains = true;
		 }
	 }

	 if(!contains){
		 if(searchedLength >= 5){
				var newSearchedArray = [
					this.state.searchTabs[1],
					this.state.searchTabs[2],
					this.state.searchTabs[3],
					this.state.searchTabs[4],
					this.props.query
				]
				
				this.setState({
					searchTab : newSearchedArray
				})
		 }
		 else{
				this.setState({
					search : this.state.searchTabs.push(this.props.query)
				});
		 }
	 }
 }

 renderTab(){
	 return(<div>hello</div>);
 }

 render(){
	 return (
		 <div className={"row bg-faded tab-box"}>
		 	<div className={"offset-lg-2"}>
					<ul className="nav nav-tabs">
						<li className="nav-item">
							<a className="nav-link active" href="#">Active</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
	 );
 }
}

export default Tabs;