import React from "react";
import "./index.scss";
import Input from "../Input";
import TodoList from "../TodoList";
import Footer from "../Footer";

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
