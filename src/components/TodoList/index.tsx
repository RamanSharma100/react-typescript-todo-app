import React, { FC, MouseEventHandler } from "react";
import { ITodo } from "../interfaces";

import "./index.css";

interface Props {
  todo: ITodo;
  key: number;
  completeTodo(id: number): void;
  deleteTodo: (id: number) => void;
}

const TodoList: FC<Props> = ({ todo, key, completeTodo, deleteTodo }) => {
  const todoComplete = (): void => {
    if (!todo.completed) {
      completeTodo(todo.id);
    }
  };

  const todoDelete = (): void => {
    deleteTodo(todo.id);
  };

  return (
    <div key={key} className="todo">
      <h1
        onClick={todoComplete}
        style={
          todo.completed ? { pointerEvents: "none" } : { cursor: "pointer" }
        }
      >
        {todo.completed ? (
          <span style={{ textDecorationLine: "line-through" }}>
            {todo.todo}
          </span>
        ) : (
          todo.todo
        )}
      </h1>
      {todo.completed ? (
        <button type="button" onClick={todoDelete}>
          Delete
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TodoList;
