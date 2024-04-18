export interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export default interface IGlobalState {
  todos: Todo[];
}
