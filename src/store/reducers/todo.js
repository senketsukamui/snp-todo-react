import ActionTypes from "../actions";
import { createReducer } from "@reduxjs/toolkit";
import omit from "lodash/omit";
import omitBy from "lodash/omitBy";
import pick from "lodash/pick";
import { FILTER_TYPES } from "../../utils";
import { getLocalStorageTodos } from "../../utils";

const initialState = {
  todos: getLocalStorageTodos() || {},
  filterType: FILTER_TYPES.ALL,
};

const {
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_TODO_STATUS,
  COMPLETE_ALL,
  CHANGE_CURRENT_FILTER,
  CLEAR_COMPLETED_TODOS,
} = ActionTypes;

export const todoReducer = createReducer(initialState, {
  [CREATE_TODO]: (state, action) => {
    const { payload } = action;
    const todo = {
      content: payload.content,
      completed: payload.completed,
      id: payload.id,
    };
    state.todos[payload.id] = todo;
  },

  [EDIT_TODO]: (state, action) => {
    const { payload } = action;
    const newTodoContent = payload.newTodoText;
    state.todos[payload.id].content = newTodoContent;
  },

  [DELETE_TODO]: (state, action) => {
    const { payload } = action;
    delete state.todos[payload.id];
  },

  [CHANGE_TODO_STATUS]: (state, action) => {
    const { payload } = action;
    const currentTodoStatus = state.todos[payload.id].completed;
    state.todos[payload.id].completed = !currentTodoStatus;
  },

  [COMPLETE_ALL]: (state, action) => {
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

  [CHANGE_CURRENT_FILTER]: (state, action) => {
    const { payload } = action;
    state.filterType = payload.filterType;
  },

  [CLEAR_COMPLETED_TODOS]: (state, action) => {
    state.todos = omitBy(state.todos, (todo) => todo.completed);
  },
});
