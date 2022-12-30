import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";
import TodoContextProvider from "./store/todo-context";
("./store/todo-context");

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </>
  );
}

export default App;
