import produce, { Draft } from "immer";
import { TodoState, Todo, RecorderState } from "../models";
import { TodoAction } from "../actions/todo/types";
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CLEAR_TODOS
} from "../actions/todo/contants";
import { RecorderAction } from "../actions/recorder/types";
import {
  STORE_ACTION,
  TOGGLE_RECORDING,
  CLEAR_RECORDING,
  PLAY_RECORDING
} from "../actions/recorder/constants";

const intialTodoState: TodoState = { data: [], idCounter: 0 };
export const todo = produce((draft: Draft<TodoState>, action: TodoAction) => {
  switch (action.type) {
    case CREATE_TODO:
      draft.data.push(
        new Todo(draft.idCounter++, action.name, action.description, new Date())
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

    case CLEAR_TODOS:
      draft.idCounter = 0;
      draft.data = [];
      break;
  }
}, intialTodoState);

const recordedActions = localStorage.getItem("recordedActions");
const initialActions = recordedActions ? JSON.parse(recordedActions) : [];

export const recorder = produce(
  (draft: Draft<RecorderState>, action: RecorderAction) => {
    switch (action.type) {
      case STORE_ACTION:
        if (!draft.recording) return;

        draft.actions.push(action.todoAction);

        localStorage.setItem("recordedActions", JSON.stringify(draft.actions));
        break;

      case TOGGLE_RECORDING:
        draft.recording = !draft.recording;
        break;

      case PLAY_RECORDING:
        draft.playing = true;
        break;

      case CLEAR_RECORDING:
        draft.recording = false;
        draft.playing = false;
        draft.actions = [];
        localStorage.removeItem("recordedActions");
        break;
    }
  },
  { recording: false, actions: initialActions }
);
