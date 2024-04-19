import { Todo } from "@/interfaces/IGlobalSlice";
import { addTodo, completeTodo, removeTodo } from "@/state/globalSlice";
import { useAppDispatch } from "@/store/store-hooks";

const useTasks = () => {
  const dispatch = useAppDispatch();

  const handleAddTodo = (content: string) => {
    dispatch(
      addTodo({
        id: Date.now(),
        content,
        isCompleted: false,
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleCompleteTodo = (id: number) => {
    dispatch(completeTodo(id));
  };

  return { handleAddTodo, handleDeleteTodo, handleCompleteTodo };
};

export default useTasks;
