import {combineReducers} from "redux";
import {numbersReducer} from "./numbersReducer";

export const rootReducer = combineReducers({
  numbersReducer,
})