import React, { useRef, useContext } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TodoModel from "../models/Todo";
import { todoContext } from "../store/todo-context";

const TodoForm: React.FC = () => {
  const todoCtx = useContext(todoContext);
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoInput = new TodoModel(todoRef.current!.value);
    todoCtx.onAddTodo(todoInput);
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        width: "75%",
        mx: 3,
        my: 5,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          width: "75%",
          justifyContent: "center",
        }}
        label="New Todo"
        id="fullWidth"
        color="primary"
        inputRef={todoRef}
      />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mx: 2, my: 1 }}
        type="submit"
      >
        ADD TODO
      </Button>
    </Box>
  );
};

export default TodoForm;
