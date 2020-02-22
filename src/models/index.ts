export class Todo {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly creationDate: Date
  ) {}
}

export interface TodoState {
  readonly data: Todo[];
}

export interface State {
  readonly todo: TodoState;
}
