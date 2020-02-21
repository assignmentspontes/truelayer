import produce, { Draft } from "immer";
import { TodoState, Todo } from "../models";
import { TodoActions, CREATE_TODO } from "../actions";

export const todo = produce(
  (draft: Draft<TodoState>, action: TodoActions) => {
    switch (action.type) {
      case CREATE_TODO:
        draft.data.push(
          new Todo(0, action.name, action.description, new Date())
        );
        break;
    }
  },
  { data: [] }
);
