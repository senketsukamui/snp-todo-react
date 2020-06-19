import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { createTodo } from "../../store/actions/todo";

const Input = (props) => {
  const [inputState, setInputState] = React.useState("");
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.createTodo({
          id: Date.now(),
          content: inputState,
          completed: false,
        });
      }}
    >
      <input
        className="todo-form__input"
        type="text"
        placeholder="What you gonna do?"
        onChange={(e) => {
          setInputState(e.target.value);
        }}
      />
    </form>
  );
};

export default connect(null, { createTodo })(Input);
