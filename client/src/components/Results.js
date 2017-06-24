import React from "react";

import ResultOutput from "./children/ResultOutput";
import nytApi from "./utils/nytAPI";

class Results extends React.Component {

  constructor(props) {
    super(props);

		var resultArray = [];
		
		for(var i = 0; i < 5; i++){
			var title = window.sessionStorage.getItem("resultsTitle" +  i);
			var link = window.sessionStorage.getItem("resultsLink" +  i);
			if(title !== null || title != undefined && link !== null || link !== undefined){
				resultArray.push({
					title : title,
					link : link
				});
			}
			else{
				resultArray.push({
					title : " ",
					link : "#"
				});
			}
		}
		
		this.state = {
			resultArray : resultArray
		};
  }

  render() {
		console.log("++++++++++++++++" + this.resultArray);
    return (
			<div className="row">
				<div className="offset-lg-2 col-lg-8 jumbotron">
					<h2 className="text-center text-primary">Results</h2>
					<hr />
					<ResultOutput articleTitle={this.state.resultArray[0].title} articleLink={this.state.resultArray[0].link} />
					<hr />
					<ResultOutput articleTitle={this.state.resultArray[1].title} articleLink={this.state.resultArray[1].link} />
					<hr />
					<ResultOutput articleTitle={this.state.resultArray[2].title} articleLink={this.state.resultArray[2].link} />
					<hr />
					<ResultOutput articleTitle={this.state.resultArray[3].title} articleLink={this.state.resultArray[3].link} />
					<hr />
					<ResultOutput articleTitle={this.state.resultArray[4].title} articleLink={this.state.resultArray[4].link} />
				</div>
			</div>
    );
  }
}

// Export the component back for use in other files
export default Results;
