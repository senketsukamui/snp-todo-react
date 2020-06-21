import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { createTodo } from "../../store/actions/todo";
import { nanoid } from "nanoid";
import { completeAllTodos } from "../../store/actions/todo";

const Input = (props) => {
  const [inputState, setInputState] = React.useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputState.length) {
      props.createTodo({
        id: nanoid(),
        content: inputState,
        completed: false,
      });
      setInputState("");
    }
  };
  return (
    <div className="todo-form">
      <button
        className="todo-form__complete-all"
        onClick={(e) => {
          props.completeAllTodos();
        }}
      />
      <form className="todo-form__form" onSubmit={onFormSubmit}>
        <input
          className="todo-form__input"
          type="text"
          placeholder="What you gonna do?"
          onChange={(e) => {
            setInputState(e.target.value);
          }}
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
)(Input);
