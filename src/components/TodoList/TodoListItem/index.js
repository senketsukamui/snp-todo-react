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
  const [isEditable, setEditableStatus] = React.useState(false);
  const [todoState, setTodoState] = React.useState(props.todo.content);
  const inputRef = React.createRef();

  const onTodoDblClick = () => {
    setEditableStatus(true);
  };

  const onEditFinish = () => {
    props.editTodo({
      id: todoId,
      newTodoText: todoState,
    });
    setEditableStatus(false);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onEditFinish();
    }
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
    onEditFinish();
  };

  const editableTodoText = (
    <input
      value={todoState}
      ref={inputRef}
      onChange={(e) => setTodoState(e.target.value)}
      classname="todo__edit"
    />
  );
  return (
    <div className="todo">
      <i
        className={`todo__checkbox ${
          props.todo.completed && "todo__checkbox_active"
        }`}
        onClick={onCheckboxClick}
      ></i>
      <div
        className="todo__text"
        onDoubleClick={onTodoDblClick}
        onBlur={onTodoBlur}
        onKeyPress={onEnterPress}
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
