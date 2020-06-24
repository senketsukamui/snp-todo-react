import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentFilter, clearCompletedTodos } from "store/actions/todo";
import { FILTER_TYPES } from "utils";
import capitalize from "lodash/capitalize";

const Footer = () => {
  const dispatch = useDispatch();

  const todosCopy = useSelector((state) => state.todo.todos);

  const filterType = useSelector((state) => state.todo.filterType);

  const filterTypeHandler = React.useCallback(
    (e) => {
      dispatch(changeCurrentFilter({ filterType: e.target.name }));
    },
    [dispatch, filterType]
  );

  const clearCompletedHandler = React.useCallback(() => {
    dispatch(clearCompletedTodos());
  }, [dispatch]);

  const activeTodosCount = React.useMemo(
    () => Object.values(todosCopy).filter((todo) => !todo.completed).length,
    [todosCopy]
  );

  const filterButtons = Object.values(FILTER_TYPES).map((filter) => (
    <button
      name={filter}
      onClick={filterTypeHandler}
      className={`filters__${filter.toLowerCase()} filters__${filter.toLowerCase()}${
        filterType === filter ? `_active` : ""
      }`}
    >
      {capitalize(filter)}
    </button>
  ));

  return (
    <div className="footer">
      <div className="footer__count">Todos left: {activeTodosCount}</div>
      <div className="filters">{filterButtons}</div>
      <button className="footer__clear" onClick={clearCompletedHandler}>
        Clear completed
      </button>
    </div>
  );
};

export default React.memo(Footer);
