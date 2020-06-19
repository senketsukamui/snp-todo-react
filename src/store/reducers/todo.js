import ActionTypes from "../actions";
import { createReducer } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  todos: [],
  currentSort: "all",
};

export const todoReducer = createReducer(initialState, {
  [ActionTypes.CREATE_TODO]: (state, action) => {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  },
  [ActionTypes.EDIT_TODO]: (state, action) => {
    const idx = state.todos.findIndex((todo) => (todo.id = action.payload.id));
    if (idx === -1) return state;
    const newTodosState = { ...state.todos };
    newTodosState[idx].content = action.payload.newTodoContent;
    return {
      ...state,
      todos: newTodosState,
    };
  },
});
