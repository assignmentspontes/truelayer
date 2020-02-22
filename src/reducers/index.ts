import produce, { Draft } from "immer";
import { TodoState, Todo } from "../models";
import { TodoActions, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from "../actions";

export const todo = produce(
  (draft: Draft<TodoState>, action: TodoActions) => {
    switch (action.type) {
      case CREATE_TODO:
        draft.data.push(
          new Todo(
            draft.idCounter++,
            action.name,
            action.description,
            new Date()
          )
        );

        break;

      case UPDATE_TODO:
        const todo = draft.data.find(t => t.id === action.id);
        if (todo) {
          todo.description = action.description;
          todo.name = action.name;
        }

        break;

      case DELETE_TODO:
        const idx = draft.data.findIndex(t => t.id === action.id);

        if (idx >= 0) {
          draft.data.splice(idx, 1);
        }

        break;
    }
  },
  { data: [], idCounter: 0 }
);
