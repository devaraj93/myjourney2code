import { combineReducers } from "redux";
import diceReducer from "./diceReducer";

export default combineReducers({
  data: diceReducer,
});
