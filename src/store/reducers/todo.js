import ActionTypes from "../actions";
import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  currentSort: "all",
};

export const todoReducer = createReducer(initialState, {
  [ActionTypes.CREATE_TODO]: (state, action) => {
    const todo = action.payload;
    state.todos.push(todo);
  },
  [ActionTypes.EDIT_TODO]: (state, action) => {
    const idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
    if (idx === -1) return state;
    const newTodoContent = action.payload.newTodoText;
    state.todos[idx].content = newTodoContent;
  },
  [ActionTypes.DELETE_TODO]: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  },
});
