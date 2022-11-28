import {types} from "./types";
export const addNumberAction = (number) => {
  return{
    type: types.ADD_NUMBER,
    payload:number,
  }
}
export const clearNumbersAction = (number) => {
  return{
    type: types.CLEAR_NUMBERS,
  }
}