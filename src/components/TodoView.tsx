import React from "react";
import { Todo as TodoModel } from "../models";

export const TodoView: React.FC<TodoModel> = ({
  name,
  description,
  creationDate
}) => {
  return (
    <div>
      <span>{name}</span> <span>{creationDate.toLocaleDateString()}</span>
      <br />
      <span>{description}</span>
    </div>
  );
};
