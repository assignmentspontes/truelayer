import React from "react";
import { TodoList } from "./TodoList";
import { State } from "../models";
import { useSelector } from "react-redux";

export const Todos: React.FC = () => {
  const todos = useSelector((state: State) => state.todo.data);

  return <TodoList todos={todos}></TodoList>;
};
