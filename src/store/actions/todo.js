import ActionTypes from "./index";

const {
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_TODO_STATUS,
  COMPLETE_ALL,
  CHANGE_CURRENT_FILTER,
  CLEAR_COMPLETED_TODOS,
} = ActionTypes;

export const createTodo = (payload) => {
  return { type: CREATE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const changeTodoStatus = (payload) => {
  return { type: CHANGE_TODO_STATUS, payload };
};

export const completeAllTodos = () => {
  return { type: COMPLETE_ALL };
};

export const changeCurrentFilter = (payload) => {
  return { type: CHANGE_CURRENT_FILTER, payload };
};

export const clearCompletedTodos = () => {
  return { type: CLEAR_COMPLETED_TODOS };
};
