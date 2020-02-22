import React from "react";
import { Todo as TodoModel } from "../models";
import { Todo } from "./Todo";

export const TodoList: React.FC<{
  todos: TodoModel[];
  onUpdateTodo: (id: number, name: string, description: string) => void;
  onDeleteTodo: (id: number) => void;
}> = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div>
      {todos.map(t => (
        <Todo
          key={t.id}
          todo={t}
          onUpdate={onUpdateTodo}
          onDelete={onDeleteTodo}
        ></Todo>
      ))}
    </div>
  );
};
