import { immerable } from "immer";
import { TodoAction } from "../actions/todo/types";

export class Todo {
  [immerable] = true;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly creationDate: Date
  ) {}
}

export interface TodoState {
  readonly data: Todo[];
  readonly idCounter: number;
}

export interface RecorderState {
  readonly recording: boolean;
  readonly playing: boolean;
  readonly actions: TodoAction[];
}

export interface State {
  readonly todo: TodoState;
  readonly recorder: RecorderState;
}
