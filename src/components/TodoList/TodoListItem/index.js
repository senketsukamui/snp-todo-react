import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "../../../store/actions/todo";

const TodoListItem = (props) => {
  console.log(props);
  const [checkboxState, setCheckboxState] = React.useState(
    props.todo.completed
  );
  const [isEditable, setEditableStatus] = React.useState(false);
  const [todoState, setTodoState] = React.useState(props.todo.content);
  const inputRef = React.createRef();
  const onTodoDblClick = () => {
    setEditableStatus(true);
  };
  const onDeleteButtonClick = () => {
    props.deleteTodo({
      id: props.todo.id,
    });
  };
  React.useLayoutEffect(() => {
    if (inputRef.current) {
      console.log(inputRef);
      inputRef.current.focus();
    }
  }, [inputRef]);
  const onTodoBlur = () => {
    props.editTodo({
      id: props.todo.id,
      newTodoText: todoState,
    });
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
        onBlur={onTodoBlur}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.editTodo({
              id: props.todo.id,
              newTodoText: todoState,
            });
            setEditableStatus(false);
          }
        }}
      >
        {isEditable ? editableTodoText : todoState}
      </div>
      <button className="todo__delete-button" onClick={onDeleteButtonClick} />
    </div>
  );
};

export default connect(null, { editTodo, deleteTodo })(TodoListItem);
