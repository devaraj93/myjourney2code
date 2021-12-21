import React from "react";
import { randomNum } from "../utils";
import "../sl.css";
import { rolledValue } from "../actions";
import { connect } from "react-redux";

const Dice = (props) => {
  return (
    <div>
      <img
        alt="d"
        src={`images/dice${props.data === 0 ? 6 : props.data}.png`}
        style={{ width: "60px" }}
      />
      <div>
        <button
          className="ui button"
          onClick={() => props.rolledValue(randomNum())}
        >
          Roll
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data.diceRolledValue };
};

export default connect(mapStateToProps, { rolledValue })(Dice);
