import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "@/store/store-hooks";

const TodoItems: React.FC = (): JSX.Element => {
  const todos = useAppSelector((state) => state.global.todos);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
export default TodoItems;
