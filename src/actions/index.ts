export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

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

export type TodoActions =
  | CreateTodoAction
  | UpdateTodoAction
  | DeleteTodoAction;
