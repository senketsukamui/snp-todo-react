import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo, changeTodoStatus } from "store/actions/todo";

const TodoListItem = (props) => {
  const dispatch = useDispatch();

  const todoId = props.todo.id;

  const [isEditable, setEditableStatus] = React.useState(false);

  const [todoState, setTodoState] = React.useState(props.todo.content);

  const [previousTodoContent, setPreviousTodoContent] = React.useState("");

  const inputRef = React.createRef();

  const handleDblClick = () => {
    setPreviousTodoContent(todoState);
    setEditableStatus(true);
  };

  const handleTodoDelete = React.useCallback(() => {
    dispatch(
      deleteTodo({
        id: todoId,
      })
    );
  }, [dispatch, todoId]);

  const handleEditFinish = React.useCallback(() => {
    if (!todoState.length || !todoState.trim().length) {
      handleTodoDelete();
    } else {
      dispatch(
        editTodo({
          id: todoId,
          newTodoText: todoState,
        })
      );
    }
    setEditableStatus(false);
  }, [dispatch, todoState, handleTodoDelete, todoId]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEditFinish();
    } else if (e.key === "Escape") {
      setTodoState(previousTodoContent);
      setEditableStatus(false);
    }
  };

  const handleCheckboxClick = React.useCallback(() => {
    dispatch(changeTodoStatus({ id: todoId }));
  }, [dispatch, todoId]);

  React.useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleEditValue = (e) => {
    setTodoState(e.target.value);
  };

  const editableTodoText = (
    <input
      value={todoState}
      ref={inputRef}
      onChange={handleEditValue}
      className="todo__edit"
    />
  );

  return (
    <div className="todo">
      <i
        className={`todo__checkbox ${
          props.todo.completed && "todo__checkbox_active"
        }`}
        onClick={handleCheckboxClick}
      ></i>
      <div
        className="todo__text"
        onDoubleClick={handleDblClick}
        onBlur={handleEditFinish}
        onKeyDown={handleKeyPress}
      >
        {isEditable ? editableTodoText : todoState}
      </div>
      <button className="todo__delete-button" onClick={handleTodoDelete} />
    </div>
  );
};

export default React.memo(TodoListItem);
