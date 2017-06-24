import React from "react";

class ResultOutput extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e){
    console.log("Close " + e);
  }

  render() {
    return (
			<div>
				<span>{this.props.articleTitle + " "}</span>
        <a href={this.props.articleLink}>
          <i className="fa fa-external-link" aria-hidden="true" />
        </a>
        <button onClick={this.handleClick} className="btn btn-success btn-sm float-right fancy">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
			</div>
    );
  }
}

// Export the component back for use in other files
export default ResultOutput;