"use client";

import { useAppSelector } from "@/store/store-hooks";
import React from "react";

const TodoList: React.FC = (): JSX.Element => {
  const todos = useAppSelector((state) => state.global.todos);
  return (
    <div className="w-full max-w-xl flex flex-col items-start justify-start">
      <h1>
        ToDo List <span>{todos.length} items</span>
      </h1>
    </div>
  );
};
export default TodoList;
