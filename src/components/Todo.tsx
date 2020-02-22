import React, { useState } from "react";
import { Todo as TodoModel } from "../models";
import { EditTodo } from "./EditTodo";
import { TodoView } from "./TodoView";

export const Todo: React.FC<{
  todo: TodoModel;
  onUpdate: (id: number, name: string, description: string) => void;
}> = ({ todo, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const visibleElement = isEditing ? (
    <EditTodo
      edit={true}
      name={todo.name}
      description={todo.description}
      onSave={(name, desc) => {
        onUpdate(todo.id, name, desc);
        setIsEditing(false);
      }}
    ></EditTodo>
  ) : (
    <div>
      <TodoView {...todo}></TodoView>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
  return <div>{visibleElement}</div>;
};
