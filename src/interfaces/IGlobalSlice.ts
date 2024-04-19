export interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

export default interface IGlobalState {
  todos: Todo[];
}
