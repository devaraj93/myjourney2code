let defaultState = {
  diceRolledValue: 0,
  diceInitialValue: 6,
  playerInitPos: 1,
  playerUpdatePos: 0,
};

const diceReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "DICE_ROLLED":
      console.log(...state, action.payload);
      return { ...state, diceRolledValue: action.payload };
    default:
      return state;
  }
};

export default diceReducer;
