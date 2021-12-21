import React from "react";
import { connect } from "react-redux";

import { changeRowsToDisplay } from "../actions";

class DropDownFilter extends React.Component {
  renderDropDownList() {
    return this.props.dd_list.map((list) => {
      return (
        <option key={`k-${list.value}`} value={list.value.toString()}>
          {list.value}
        </option>
      );
    });
  }
  render() {
    return (
      <select
        className="ui dropdown"
        onChange={(event) => changeRowsToDisplay(event.target.value)} //set number of pages to redux state
      >
        {this.renderDropDownList()}
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { changeRowsToDisplay })(
  DropDownFilter
);
