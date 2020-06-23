import React from "react";
import "./index.scss";
import Input from "components/Input";
import TodoList from "components/TodoList";
import Footer from "components/Footer";

const Main = () => {
  return (
    <>
      <div className="main-content">
        <div className="todo-block">
          <div className="todo-block__title">Todos</div>
          <div className="todo-block__content">
            <Input />
            <TodoList />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
