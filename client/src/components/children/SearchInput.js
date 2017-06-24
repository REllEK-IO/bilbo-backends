import React from "react";

class SearchInput extends React.Component {

  constructor(props) {
    super(props);
  }

	handleChange(e){
		const newProp = e.target.value;
		const key = this.props.searchLabel;
		console.log(key + " " + newProp);
		const UPDATED = {
			"newState" : newProp,
			"keyTarget" : key
		}
		this.props.updateFields(UPDATED);
	}

  render() {
    return (
			<div>
				<h3 className="text-center">{this.props.searchLabel}</h3>
				<input value={this.props.defaultValue} onChange={this.handleChange.bind(this)} type={this.props.inputType} className="form-control text-center" classID={this.props.searchLabel} />
			</div>
    );
  }
}

// Export the component back for use in other files
export default SearchInput;