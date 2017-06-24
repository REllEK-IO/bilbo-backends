import React from "react";

import SearchInput from "./children/SearchInput";
import SearchButton from "./children/SearchButton";
import nytApi from "./utils/nytAPI";

class Search extends React.Component {

  constructor(props) {
    super(props);

		var date = new Date();
		var dateDay = String(date.getDate());
		var dateMonth = String(date.getMonth() + 1);
		var dateYear = String(date.getFullYear());

		console.log(date);

		dateDay = (dateDay.length === 1 )? "0" +  dateDay : dateDay;
		dateMonth = (dateMonth.length === 1 )? "0" +  dateMonth : dateMonth;

		var dateString = dateYear + dateMonth + dateDay;
		var date_String = dateYear + "-" + dateMonth  + "-" + dateDay;

		console.log(date_String);

		this.state = {
			"topic" : "",
			"startValue" : "2000-01-01",
			"endValue" : date_String,
			"start" : "20000101",
			"end" : dateString
		}
  }

	searchNYT(){
		console.log(this.state);
		nytApi.run(this.state.topic, this.state.start, this.state.end);
	}

	assembleDate(date){
		console.log("Ran" + (date));
		var dateArr = date.split("-");
		var assembled = ""
		assembled += dateArr[0] + dateArr[1] + dateArr[2];
		return assembled;
	}

	updateFields(newState){
		if(newState.keyTarget === "Topic"){
			console.log(newState.newState);
			this.setState({
				"topic" : newState.newState
			})
		}
		else if(newState.keyTarget === "Start Year"){
			this.setState({
				startValue : newState.newState
			});
			const START = this.assembleDate(newState.newState); 
			console.log(START);
			this.setState({
				"start" : START
			});
		}
		else if(newState.keyTarget === "End Year"){
			this.setState({
				endValue : newState.newState
			});

			const END = this.assembleDate(newState.newState); 
			console.log(END);
			this.setState({
				"end" : END
			});
		}
	}

  render() {
    return (
			<div className="row">
				<div className="offset-lg-2 col-lg-8 jumbotron">
					<h2 id="search-header" className="text-primary text-center">Search</h2>
					<hr />
					<br />
					<SearchInput updateFields={this.updateFields.bind(this)} inputType={"text"} searchLabel={"Topic"} />
					<br />
					<SearchInput updateFields={this.updateFields.bind(this)} inputType={"date"} searchLabel={"Start Year"} defaultValue={this.state.startValue}/>
					<br />
					<SearchInput updateFields={this.updateFields.bind(this)} inputType={"date"} searchLabel={"End Year"} defaultValue={this.state.endValue} />
					<br />
					<SearchButton searchNYT={this.searchNYT.bind(this)}/>
				</div>
			</div>
    );
  }
}

// Export the component back for use in other files
export default Search;
