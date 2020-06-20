import ActionTypes from "./index";

export const createTodo = (payload) => {
  return { type: ActionTypes.CREATE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: ActionTypes.EDIT_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: ActionTypes.DELETE_TODO, payload };
};

export const changeTodoStatus = (payload) => {
  return { type: ActionTypes.CHANGE_TODO_STATUS, payload };
};

export const completeAllTodos = () => {
  return { type: ActionTypes.COMPLETE_ALL };
};

export const changeCurrentFilter = (payload) => {
  return { type: ActionTypes.CHANGE_CURRENT_FILTER, payload };
};

export const clearCompletedTodos = () => {
  return { type: ActionTypes.CLEAR_COMPLETED_TODOS };
};
