import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const Create = () => {
  const { addTodo } = useContext(TodoContext);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const priorityRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const status = statusRef.current.value;
    const priority = priorityRef.current.value;

    fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, status, priority }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.todo);
        addTodo(data.todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        onClick={handleFormSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add Todo
        </h2>

        <input
          type="text"
          placeholder="Enter Title"
          ref={titleRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Enter Description"
          ref={descriptionRef}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <input
          type="text"
          placeholder="Enter Current Status"
          ref={statusRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter Priority"
          ref={priorityRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md 
               hover:bg-blue-700 transition duration-300"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default Create;
