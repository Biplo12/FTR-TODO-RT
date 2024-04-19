import useTasks from "@/hooks/useTasks";
import { Todo } from "@/interfaces/IGlobalSlice";
import { CheckCircle, Circle } from "lucide-react";
import React from "react";

interface ITodoItem {
  todo: Todo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }): JSX.Element => {
  const { handleCompleteTodo, handleDeleteTodo } = useTasks();

  return (
    <div className="flex items-center justify-between w-full py-2 gap-2">
      <div className="flex items-center gap-2">
        <button onClick={() => handleCompleteTodo(todo.id)}>
          {todo.isCompleted ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <Circle />
          )}
        </button>
        <p
          className={`text-gray-300 ${todo.isCompleted ? "line-through" : ""}`}
        >
          {todo.content}
        </p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
