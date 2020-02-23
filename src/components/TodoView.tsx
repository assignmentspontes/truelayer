import React from "react";
import { Todo as TodoModel } from "../models";

export const TodoView: React.FC<TodoModel> = ({
  name,
  description,
  creationDate
}) => {
  return (
    <div>
      <span className="date">
        {creationDate.toLocaleDateString()} {creationDate.toLocaleTimeString()}
      </span>
      <span className="name">{name}</span>
      <span className="description">{description}</span>
    </div>
  );
};
