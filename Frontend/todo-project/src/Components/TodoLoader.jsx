import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../store/TodoContext";

const TodoLoading = ({ children }) => {
  const { setTodo } = useContext(TodoContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3000/api/todo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setTodo(data.todos);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setTodo]);

  return (
    <>
      {loading && <p>Todo is loading, please wait...</p>}
      {error && <p>Something went wrong</p>}
      {!loading && !error && children}
    </>
  );
};

export default TodoLoading;
