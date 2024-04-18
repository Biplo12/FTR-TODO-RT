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
      state.todos.splice(action.payload, 1);
    },
  },
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
