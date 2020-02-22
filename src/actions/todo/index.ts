import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_TODOS } from "./contants";

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  name: string;
  description: string;
}

interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  id: number;
  name: string;
  description: string;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

interface ClearTodosAction {
  type: typeof CLEAR_TODOS;
}

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

export type TodoAction =
  | CreateTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | ClearTodosAction;
