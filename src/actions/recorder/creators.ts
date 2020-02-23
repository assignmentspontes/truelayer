import {
  StoreActionAction,
  StartRecordingAction,
  StopRecordingAction,
  TogggleRecordingAction,
  ClearRecordingAction,
  PlayRecordingAction
} from "./types";
import {
  STORE_ACTION,
  START_RECORDING,
  STOP_RECORDING,
  TOGGLE_RECORDING,
  CLEAR_RECORDING,
  PLAY_RECORDING
} from "./constants";
import { TodoAction } from "../todo/types";

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
