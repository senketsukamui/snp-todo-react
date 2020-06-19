import { combineReducers } from "redux";
import { todoReducer } from "../reducers/todo";
export default combineReducers({
  todo: todoReducer,
});
