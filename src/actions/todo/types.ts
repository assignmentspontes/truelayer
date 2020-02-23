import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_TODOS } from "./contants";

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  name: string;
  description: string;
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  id: number;
  name: string;
  description: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export interface ClearTodosAction {
  type: typeof CLEAR_TODOS;
}

export type TodoAction =
  | CreateTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | ClearTodosAction;
