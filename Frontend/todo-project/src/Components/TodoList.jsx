import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
