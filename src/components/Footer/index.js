import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import {
  changeCurrentFilter,
  clearCompletedTodos,
} from "../../store/actions/todo";
import { FILTER_TYPES } from "../../utils";
const Footer = (props) => {
  const todosCopy = props.todos;
  const activeTodosCount = React.useMemo(
    () => Object.values(todosCopy).filter((todo) => !todo.completed).length,
    [todosCopy]
  );
  const filterTypeHandler = (e) => {
    props.changeCurrentFilter({ filterType: e.target.name });
  };
  return (
    <div className="footer">
      <div className="footer__count">Todos left: {activeTodosCount}</div>
      <div className="filters">
        <button
          className="filters__all"
          name={FILTER_TYPES.ALL}
          onClick={filterTypeHandler}
        >
          All
        </button>
        <button
          className="filters__active"
          name={FILTER_TYPES.ACTIVE}
          onClick={filterTypeHandler}
        >
          Active
        </button>
        <button
          className="filters__completed"
          name={FILTER_TYPES.COMPLETED}
          onClick={filterTypeHandler}
        >
          Completed
        </button>
      </div>
      <button className="footer__clear" onClick={props.clearCompletedTodos}>
        Clear completed
      </button>
    </div>
  );
};

export default connect(
  (store) => ({
    todos: store.todo.todos,
  }),
  { changeCurrentFilter, clearCompletedTodos }
)(Footer);
