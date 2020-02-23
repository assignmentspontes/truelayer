import {
  CreateTodoAction,
  UpdateTodoAction,
  DeleteTodoAction,
  ClearTodosAction
} from "./types";

import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_TODOS } from "./contants";

export function createTodo(
  name: string,
  description: string
): CreateTodoAction {
  return {
    type: CREATE_TODO,
    name,
    description
  };
}

export function updateTodo(
  id: number,
  name: string,
  description: string
): UpdateTodoAction {
  return {
    type: UPDATE_TODO,
    id,
    name,
    description
  };
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    id
  };
}

export function clearTodos(): ClearTodosAction {
  return {
    type: CLEAR_TODOS
  };
}
