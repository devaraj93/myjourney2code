import React from "react";
import { randomNum } from "../utils";
import "../sl.css";
import { rolledValue } from "../actions";
import { connect } from "react-redux";

function Dice() {
  return (
    <div>
      <img alt="d" src={`images/dice${4}.png`} style={{ width: "60px" }} />
      <div>
        <button className="ui button" onClick={() => rolledValue(randomNum())}>
          Roll
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "1");
  return { data: state.diceRolledValue };
};

export default connect(mapStateToProps, { rolledValue })(Dice);
