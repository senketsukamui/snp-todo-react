import React from "react";
import "./index.scss";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { filterTodo } from "../../utils";

const TodoList = (props) => {
  const filteredTodos = React.useMemo(
    () => filterTodo(props.todos, props.filterType),
    [props.todos, props.filterType]
  );
  const todosForRender = React.useMemo(
    () =>
      Object.values(filteredTodos).map((e) => (
        <TodoListItem todo={e} key={e.id} />
      )),
    [filteredTodos]
  );
  return <div>{todosForRender}</div>;
};

export default connect(
  (state) => ({
    todos: state.todo.todos,
    filterType: state.todo.filterType,
  }),
  null
)(TodoList);
