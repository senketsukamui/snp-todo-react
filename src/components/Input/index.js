import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { createTodo } from "store/actions/todo";
import { nanoid } from "nanoid";
import { completeAllTodos } from "store/actions/todo";

const Input = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = React.useState("");

  const handleFormSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      if (inputState.length && inputState.trim().length) {
        dispatch(
          createTodo({
            id: nanoid(),
            content: inputState,
            completed: false,
          })
        );
        setInputState("");
      }
    },
    [dispatch, inputState]
  );

  const handleCompleteAll = React.useCallback(() => {
    dispatch(completeAllTodos());
  }, [dispatch]);

  const handleChangeValue = (e) => {
    setInputState(e.target.value);
  };

  const handleEscPress = (e) => {
    if (e.key === "Escape") {
      setInputState("");
    }
  };
  return (
    <div className="todo-form">
      <button className="todo-form__complete-all" onClick={handleCompleteAll} />
      <form className="todo-form__form" onSubmit={handleFormSubmit}>
        <input
          className="todo-form__input"
          type="text"
          placeholder="What you gonna do?"
          onChange={handleChangeValue}
          onBlur={handleFormSubmit}
          onKeyDown={handleEscPress}
          value={inputState}
        />
      </form>
    </div>
  );
};

export default React.memo(Input);
