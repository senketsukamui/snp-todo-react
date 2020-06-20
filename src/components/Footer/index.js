import React from "react";
import "./index.scss";
import { connect } from "react-redux";
const Footer = (props) => {
  const todosCopy = props.todos;
  const activeTodosCount = React.useMemo(
    () => Object.values(todosCopy).filter((todo) => !todo.completed).length,
    [todosCopy]
  );
  return (
    <div className="footer">
      <div className="footer__count">Todos left: {activeTodosCount}</div>
      <div className="sorts">
        <button className="sorts__all">All</button>
        <button className="sorts__active">Active</button>
        <button className="sorts__completed">Completed</button>
      </div>
      <button className="footer__clear">Clear completed</button>
    </div>
  );
};

export default connect(
  (store) => ({
    todos: store.todo.todos,
  }),
  {}
)(Footer);
