import IGlobalState, { Todo } from "@/interfaces/IGlobalSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IGlobalState = {
  todos: [],
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = globalSlice.actions;

export default globalSlice.reducer;
