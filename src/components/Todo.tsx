import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";

import { todoContext } from "../store/todo-context";
import TodoModel from "../models/Todo";
import { List } from "@mui/material";

const Todo: React.FC<{ item: TodoModel }> = (props) => {
  const todoCtx = useContext(todoContext);
  return (
    <FormControlLabel
      sx={{ ml: 5 }}
      color="secondary"
      value={props.item.textContent}
      control={<List />}
      label={props.item.textContent}
      labelPlacement="end"
      onClick={todoCtx.onRemove.bind(null, props.item.id)}
    />
  );
};

export default Todo;
