import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#151515] text-white gap-8">
      <TodoForm />
      <TodoList />
    </main>
  );
}
