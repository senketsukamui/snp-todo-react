import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import {
  changeCurrentFilter,
  clearCompletedTodos,
} from "store/actions/todo";
import { FILTER_TYPES } from "utils";
import capitalize from "lodash/capitalize";
const Footer = (props) => {
  const todosCopy = props.todos;

  const activeTodosCount = React.useMemo(
    () => Object.values(todosCopy).filter((todo) => !todo.completed).length,
    [todosCopy]
  );

  const filterTypeHandler = (e) => {
    props.changeCurrentFilter({ filterType: e.target.name });
  };

  const filterButtons = Object.values(FILTER_TYPES).map((filterType) => (
    <button
      name={filterType}
      onClick={filterTypeHandler}
      className={`filters__${filterType.toLowerCase()} filters__${filterType.toLowerCase()}${
        props.filterType === filterType ? `_active` : ""
      }`}
    >
      {capitalize(filterType)}
    </button>
  ));
  
  return (
    <div className="footer">
      <div className="footer__count">Todos left: {activeTodosCount}</div>
      <div className="filters">{filterButtons}</div>
      <button className="footer__clear" onClick={props.clearCompletedTodos}>
        Clear completed
      </button>
    </div>
  );
};

export default connect(
  (store) => ({
    todos: store.todo.todos,
    filterType: store.todo.filterType,
  }),
  { changeCurrentFilter, clearCompletedTodos }
)(React.memo(Footer));
