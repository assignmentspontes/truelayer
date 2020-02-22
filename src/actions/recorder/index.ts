import { TodoAction } from "../todo";
import {
  STORE_ACTION,
  START_RECORDING,
  STOP_RECORDING,
  TOGGLE_RECORDING,
  CLEAR_RECORDING,
  PLAY_RECORDING
} from "./constants";

interface StoreActionAction {
  type: typeof STORE_ACTION;
  todoAction: TodoAction;
}

interface TogggleRecordingAction {
  type: typeof TOGGLE_RECORDING;
}

interface StartRecordingAction {
  type: typeof START_RECORDING;
}

interface StopRecordingAction {
  type: typeof STOP_RECORDING;
}

interface ClearRecordingAction {
  type: typeof CLEAR_RECORDING;
}

interface PlayRecordingAction {
  type: typeof PLAY_RECORDING;
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

export function stopRecording(): StopRecordingAction {
  return {
    type: STOP_RECORDING
  };
}

export function toggleRecording(): TogggleRecordingAction {
  return {
    type: TOGGLE_RECORDING
  };
}

export function clearRecording(): ClearRecordingAction {
  return {
    type: CLEAR_RECORDING
  };
}

export function playRecording(): PlayRecordingAction {
  return {
    type: PLAY_RECORDING
  };
}

export type RecorderAction =
  | StoreActionAction
  | StartRecordingAction
  | StopRecordingAction
  | TogggleRecordingAction
  | ClearRecordingAction
  | PlayRecordingAction;
