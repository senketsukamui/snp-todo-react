import React from "react";
import "./index.scss";
import { isEnterPressed } from "../../../utils";
import { useFocus } from "../../../hooks";

const TodoListItem = (props) => {
  const [checkboxState, setCheckboxState] = React.useState(
    props.todo.completed
  );
  const [isEditable, setEditableStatus] = React.useState(false);
  const [todoState, setTodoState] = React.useState(props.todo.content);
  const [inputRef, setInputFocus] = useFocus();
  const onTodoDblClick = () => {
    setEditableStatus(true);
    setInputFocus();
  };
  const onTodoFocusOut = () => {
    setEditableStatus(false);
  };
  const editableTodoText = (
    <input
      value={todoState}
      ref={inputRef}
      onChange={(e) => setTodoState(e.target.value)}
    />
  );
  return (
    <div className="todo">
      <input
        type="checkbox"
        className="todo__checkbox"
        checked={checkboxState}
        onClick={() => {
          setCheckboxState(!checkboxState);
        }}
      />
      <div
        className="todo__text"
        onDoubleClick={onTodoDblClick}
        onBlur={onTodoFocusOut}
        onKeyPress={(e) => {
          if (isEnterPressed) {
            setEditableStatus(false);
          }
        }}
      >
        {isEditable ? editableTodoText : todoState}
      </div>
      <button className="todo__delete-button" />
    </div>
  );
};

export default TodoListItem;
