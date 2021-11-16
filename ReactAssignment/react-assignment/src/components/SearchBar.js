import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui input focus">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.term}
          onChange={this.onInputChange}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
