import { TodoAction } from "../todo";
import { STORE_ACTION, START_RECORDING } from "./constants";

interface StoreActionAction {
  type: typeof STORE_ACTION;
  todoAction: TodoAction;
}

interface StartRecordingAction {
  type: typeof START_RECORDING;
}

export function storeAction(todoAction: TodoAction): StoreActionAction {
  return {
    type: STORE_ACTION,
    todoAction
  };
}

export function startRecording(): StartRecordingAction {
  return {
    type: START_RECORDING
  };
}

export type RecorderAction = StoreActionAction | StartRecordingAction;
