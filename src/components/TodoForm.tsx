"use client";

import React from "react";
import { Input } from "./ui/input";
import { CornerDownLeft } from "lucide-react";
import useTasks from "@/hooks/useTasks";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_TODO_LENGTH = 55;

const TodoForm: React.FC = (): JSX.Element => {
  const { handleAddTodo } = useTasks();
  const formSchema = z.object({
    todoContent: z.string().min(1).max(MAX_TODO_LENGTH),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoContent: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    handleAddTodo(data.todoContent);
    form.setValue("todoContent", "");
  };

  return (
    <div className="flex w-full max-w-2xl relative items-center justify-center h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            name="todoContent"
            control={form?.control}
            render={({ field }) => (
              <FormItem className="relative w-full flex justify-center items-center">
                <Input
                  placeholder="Add a new ToDo"
                  type="text"
                  {...field}
                  maxLength={MAX_TODO_LENGTH}
                  className="pr-8"
                />
                <CornerDownLeft
                  size={20}
                  className="absolute top-1 right-2 text-gray-500 cursor-pointer hover:text-gray-300"
                  onClick={() => form.handleSubmit(onSubmit)()}
                />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
export default TodoForm;
