export const CREATE_TODO = "CREATE_TODO";

interface CreateTodoAction {
  type: typeof CREATE_TODO;
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

export type TodoActions = CreateTodoAction;
