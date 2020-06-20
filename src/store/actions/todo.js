import ActionTypes from "./index";

export const createTodo = (payload) => {
  return { type: ActionTypes.CREATE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: ActionTypes.EDIT_TODO, payload };
};

export const deleteTodo = (payload) => {
  console.log(payload);
  return { type: ActionTypes.DELETE_TODO, payload };
};
