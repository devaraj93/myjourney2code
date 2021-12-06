import React from "react";

import { connect } from "react-redux";
import { moveForward } from "../actions";

class Pagination extends React.Component {
  onClickBack = () => {
    console.log("i clicked on Back");
  };

  onClickForward = () => {
    console.log("i clicked on Forward");
    this.props.moveForward();
  };
  render() {
    return (
      <span>
        <button className="ui button" onClick={this.onClickBack}>
          Back
        </button>
        <button className="ui button" onClick={this.onClickForward}>
          Forward
        </button>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.data.rowFilter };
};

export default connect(mapStateToProps, { moveForward })(Pagination);
// export default Pagination;
