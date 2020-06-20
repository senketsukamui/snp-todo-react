import ActionTypes from "../actions";
import { createReducer } from "@reduxjs/toolkit";
import * as _ from "lodash";

const initialState = {
  todos: {},
  currentSort: "all",
};

export const todoReducer = createReducer(initialState, {
  [ActionTypes.CREATE_TODO]: (state, action) => {
    const todo = {
      content: action.payload.content,
      completed: action.payload.completed,
      id: action.payload.id,
    };
    state.todos[action.payload.id] = todo;
  },

  [ActionTypes.EDIT_TODO]: (state, action) => {
    const newTodoContent = action.payload.newTodoText;
    state.todos[action.payload.id].content = newTodoContent;
  },

  [ActionTypes.DELETE_TODO]: (state, action) => {
    state.todos = _.omit(state.todos, action.payload.id);
  },

  [ActionTypes.CHANGE_TODO_STATUS]: (state, action) => {
    const currentTodoStatus = state.todos[action.payload.id].completed;
    state.todos[action.payload.id].completed = !currentTodoStatus;
  },

  [ActionTypes.COMPLETE_ALL]: (state, action) => {
    if (Object.values(state.todos).some((e) => !e.completed)) {
      Object.keys(state.todos).forEach((e) => {
        if (!e.completed) {
          state.todos[e].completed = true;
        }
      });
    } else {
      Object.keys(state.todos).forEach((e) => {
        state.todos[e].completed = !state.todos[e].completed;
      });
    }
  },
});
