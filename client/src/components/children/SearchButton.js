import React from "react";

class SearchButton extends React.Component {

  constructor(props) {
    super(props);
  }

	handleClick(){
		this.props.searchNYT();
	}

  render() {
    return (
			<button onClick={this.handleClick.bind(this)} className="btn-primary btn-lg center-block" classID="submit">
				Search
			</button>
    );
  }
}

// Export the component back for use in other files
export default SearchButton;