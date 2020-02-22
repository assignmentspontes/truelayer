import produce, { Draft } from "immer";
import { TodoState, Todo, RecorderState } from "../models";
import { TodoAction } from "../actions/todo";
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/todo/contants";
import { RecorderAction } from "../actions/recorder";
import {
  STORE_ACTION,
  START_RECORDING,
  STOP_RECORDING,
  TOGGLE_RECORDING
} from "../actions/recorder/constants";

export const todo = produce(
  (draft: Draft<TodoState>, action: TodoAction) => {
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

export const recorder = produce(
  (draft: Draft<RecorderState>, action: RecorderAction) => {
    switch (action.type) {
      case STORE_ACTION:
        if (!draft.recording) return;

        draft.actions.push(action.todoAction);
        break;

      case START_RECORDING:
        draft.recording = true;
        break;

      case STOP_RECORDING:
        draft.recording = false;
        break;

      case TOGGLE_RECORDING:
        draft.recording = !draft.recording;
        break;
    }
  },
  { recording: false, actions: [] }
);
