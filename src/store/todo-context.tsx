import React, { useState, PropsWithChildren } from "react";
import TodoModel from "../models/Todo";

type todoCtxObj = {
  items: TodoModel[];
  onAddTodo: (td: TodoModel) => void;
  onRemove: (id: string) => void;
};

export const todoContext = React.createContext<todoCtxObj>({
  items: [],
  onAddTodo: () => {},
  onRemove: () => {},
});

const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodo = (todo: TodoModel) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== todoId));
  };

  const contextValue: todoCtxObj = {
    items: todos,
    onAddTodo: addTodo,
    onRemove: removeTodo,
  };

  return (
    <todoContext.Provider value={contextValue}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
