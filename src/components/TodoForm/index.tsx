import React, { FC, FormEvent, useState } from "react";

import "./index.css";

interface Props {
  addTodo(todo: string): void;
}

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form className="todoForm" onSubmit={handleTodo}>
      <div className="form-group">
        <input
          type="text"
          name="todo"
          placeholder="Add Todo.."
          autoComplete="off"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default TodoForm;
