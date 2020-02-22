import React from "react";
import { TodoList } from "./TodoList";
import { State } from "../models";
import { useSelector, useDispatch } from "react-redux";
import { EditTodo } from "./EditTodo";
import { createTodo, updateTodo, deleteTodo } from "../actions/todo";

export const Todos: React.FC = () => {
  const todos = useSelector((state: State) => state.todo.data);
  const dispatch = useDispatch();

  return (
    <div>
      <EditTodo
        edit={false}
        onSave={(name, desc) => dispatch(createTodo(name, desc))}
      ></EditTodo>
      <TodoList
        todos={todos}
        onUpdateTodo={(id, name, desc) => dispatch(updateTodo(id, name, desc))}
        onDeleteTodo={id => dispatch(deleteTodo(id))}
      ></TodoList>
    </div>
  );
};
