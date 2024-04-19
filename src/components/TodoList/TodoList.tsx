"use client";

import { useAppSelector } from "@/store/store-hooks";
import React from "react";
import { Separator } from "../ui/separator";
import TodoItems from "./Partials/TodoItems";

const TodoList: React.FC = (): JSX.Element => {
  const todos = useAppSelector((state) => state.global.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  if (!todos.length) {
    return (
      <div className="w-full max-w-xl flex flex-col items-start justify-start">
        <h1 className="text-gray-300 text-xl">No todos found</h1>
        <p className="text-muted-foreground">
          You can add a todo by typing in the input field and pressing the enter
          key.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl flex flex-col items-start justify-start">
      <div className="flex items-center justify-between w-full gap-2">
        <h1 className="text-gray-300">
          <span className="text-muted-foreground">
            {todos.length} {todos.length === 1 ? "item" : "items"}
          </span>
        </h1>
        <h2 className="text-muted-foreground">
          Completed{" "}
          <span>
            {completedTodos.length}{" "}
            {completedTodos.length === 1 ? "item" : "items"}
          </span>
        </h2>
      </div>
      <Separator />
      <TodoItems />
    </div>
  );
};
export default TodoList;
