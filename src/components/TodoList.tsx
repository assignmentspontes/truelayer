import React from "react";
import { Todo as TodoModel } from "../models";
import { Todo } from "./Todo";

export const TodoList: React.FC<{ todos: TodoModel[] }> = ({ todos }) => {
  return (
    <div>
      {todos.map(t => (
        <Todo key={t.id} {...t}></Todo>
      ))}
    </div>
  );
};
