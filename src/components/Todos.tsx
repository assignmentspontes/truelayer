import React from "react";
import { TodoList } from "./TodoList";
import { State } from "../models";
import { useSelector, useDispatch } from "react-redux";
import { EditTodo } from "./EditTodo";
import { createTodo } from "../actions";

export const Todos: React.FC = () => {
  const todos = useSelector((state: State) => state.todo.data);
  const dispatch = useDispatch();

  return (
    <div>
      <EditTodo
        edit={false}
        onUpdated={(name, desc) => dispatch(createTodo(name, desc))}
      ></EditTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};
