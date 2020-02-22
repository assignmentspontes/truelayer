export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

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

export type TodoActions = CreateTodoAction | UpdateTodoAction;
