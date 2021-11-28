import React from "react";
import { DebounceInput } from "react-debounce-input";
import { connect } from "react-redux";
import { searchValue } from "../actions";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchValue(event.target.value);
  };

  render() {
    return (
      <div className="ui input focus">
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          type="text"
          placeholder="Search..."
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { searchValue })(SearchBar);
