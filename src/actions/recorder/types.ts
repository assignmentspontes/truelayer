import {
  STORE_ACTION,
  TOGGLE_RECORDING,
  CLEAR_RECORDING,
  PLAY_RECORDING
} from "./constants";
import { TodoAction } from "../todo/types";

export interface StoreActionAction {
  type: typeof STORE_ACTION;
  todoAction: TodoAction;
}

export interface TogggleRecordingAction {
  type: typeof TOGGLE_RECORDING;
}

export interface ClearRecordingAction {
  type: typeof CLEAR_RECORDING;
}

export interface PlayRecordingAction {
  type: typeof PLAY_RECORDING;
}

export type RecorderAction =
  | StoreActionAction
  | TogggleRecordingAction
  | ClearRecordingAction
  | PlayRecordingAction;
