import React from "react";
import "./index.scss";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const todosForRender = React.useMemo(
    () => Object.values(props.todos).map((e) => <TodoListItem todo={e} />),
    [props.todos]
  );
  return <div>{todosForRender}</div>;
};

export default connect(
  (state) => ({
    todos: state.todo.todos,
  }),
  null
)(TodoList);
