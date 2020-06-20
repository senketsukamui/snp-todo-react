import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import {
  editTodo,
  deleteTodo,
  changeTodoStatus,
} from "../../../store/actions/todo";

const TodoListItem = (props) => {
  const todoId = props.todo.id;
  const [isEditable, setEditableStatus] = React.useState(props.completed);
  const [todoState, setTodoState] = React.useState(props.todo.content);
  const inputRef = React.createRef();
  const onTodoDblClick = () => {
    setEditableStatus(true);
  };
  const onCheckboxClick = () => {
    props.changeTodoStatus({ id: todoId });
  };
  const onDeleteButtonClick = () => {
    props.deleteTodo({
      id: todoId,
    });
  };
  React.useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  const onTodoBlur = () => {
    props.editTodo({
      id: todoId,
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
      <div className="todo__checkbox" onClick={onCheckboxClick}>
        {props.todo.completed ? (
          <i class="far fa-check-circle"></i>
        ) : (
          <i class="far fa-circle"></i>
        )}
      </div>
      <div
        className="todo__text"
        onDoubleClick={onTodoDblClick}
        onBlur={onTodoBlur}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.editTodo({
              id: todoId,
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

export default connect(null, { editTodo, deleteTodo, changeTodoStatus })(
  TodoListItem
);
