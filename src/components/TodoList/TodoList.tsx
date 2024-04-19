"use client";

import { useAppSelector } from "@/store/store-hooks";
import React from "react";
import { Separator } from "../ui/separator";
import TodoItems from "./Partials/TodoItems";

const TodoList: React.FC = (): JSX.Element => {
  const todos = useAppSelector((state) => state.global.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <div className="w-full max-w-xl flex flex-col items-start justify-start">
      <div className="flex items-center gap-2">
        <h1 className="text-gray-300">
          ToDo List <span>{todos.length} items</span>
        </h1>
        <p>-</p>
        <h2 className="text-gray-300">
          Completed <span>{completedTodos.length} items</span>
        </h2>
      </div>
      <Separator />
      <TodoItems />
    </div>
  );
};
export default TodoList;