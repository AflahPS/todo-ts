import { useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import Todo from "./Todo";
import { todoContext } from "../store/todo-context";
const TodoList: React.FC = () => {
  const todoCtx = useContext(todoContext);
  return (
    <FormGroup>
      {todoCtx.items.map((item, ind) => (
        <Todo key={ind} item={item} />
      ))}
    </FormGroup>
  );
};

export default TodoList;
