import React from "react";
import { Todo as TodoModel } from "../models";
import { Todo } from "./Todo";

export const TodoList: React.FC<{
  todos: TodoModel[];
  canDeleteTodo: boolean;
  canEditTodo: boolean;
  onUpdateTodo: (id: number, name: string, description: string) => void;
  onDeleteTodo: (id: number) => void;
}> = ({ todos, canDeleteTodo, canEditTodo, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(t => (
        <Todo
          key={t.id}
          todo={t}
          canEdit={canEditTodo}
          canDelete={canDeleteTodo}
          onUpdate={onUpdateTodo}
          onDelete={onDeleteTodo}
        ></Todo>
      ))}
    </div>
  );
};
