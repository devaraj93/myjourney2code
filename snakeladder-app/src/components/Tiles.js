import React from "react";
import "../sl.css";
import { createTiles } from "../utils";
import { connect } from "react-redux";

function Tiles(props) {
  return (
    <div className="board">
      {props.data === 0 ? createTiles(1) : createTiles(props.data)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.data.playerUpdatePos };
};
export default connect(mapStateToProps)(Tiles);
