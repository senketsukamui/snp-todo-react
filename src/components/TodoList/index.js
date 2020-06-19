import React from "react";
import "./index.scss";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const todosForRender = React.useMemo(() =>
    props.todos.map((e) => <TodoListItem todo={e} />)
  );
  return <div>{todosForRender}</div>;
};

export default connect(
  (state) => ({
    todos: state.todo.todos,
  }),
  null
)(TodoList);
