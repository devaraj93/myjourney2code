let defaultState = {
  diceRolledValue: 0,
  diceInitialValue: 6,
  playerInitPos: 1,
  playerUpdatePos: 0,
};

const diceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DICE_ROLLED":
      return {
        ...state,
        diceRolledValue: action.payload,
        playerUpdatePos: state.playerUpdatePos + action.payload,
      };
    default:
      return state;
  }
};

export default diceReducer;
