import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { createTodo } from "store/actions/todo";
import { nanoid } from "nanoid";
import { completeAllTodos } from "store/actions/todo";

const Input = (props) => {
  const [inputState, setInputState] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputState.length && inputState.trim().length) {
      props.createTodo({
        id: nanoid(),
        content: inputState,
        completed: false,
      });
      setInputState("");
    }
  };

  const handleChangeValue = (e) => {
    setInputState(e.target.value);
  };

  return (
    <div className="todo-form">
      <button
        className="todo-form__complete-all"
        onClick={(e) => {
          props.completeAllTodos();
        }}
      />
      <form className="todo-form__form" onSubmit={handleFormSubmit}>
        <input
          className="todo-form__input"
          type="text"
          placeholder="What you gonna do?"
          onChange={handleChangeValue}
          onBlur={handleFormSubmit}
          value={inputState}
        />
      </form>
    </div>
  );
};

export default connect(
  (store) => ({
    todos: store.todo.todos,
  }),
  { createTodo, completeAllTodos }
)(React.memo(Input));
