import React from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 space-y-2">
        <h1 className="text-xl font-bold text-gray-800">{todo.title}</h1>

        <p className="text-gray-600">{todo.description}</p>

        {/* <div className="flex flex-wrap gap-3 mt-2">
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium
      ${
        todo.status === "completed"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      }`}
          >
            {todo.status}
          </span>

          <span
            className={`px-2 py-1 rounded-full text-sm font-medium
      ${
        todo.priority === "high"
          ? "bg-red-100 text-red-800"
          : todo.priority === "medium"
          ? "bg-orange-100 text-orange-800"
          : "bg-blue-100 text-blue-800"
      }`}
          >
            {todo.priority}
          </span>
        </div> */}

        <p className="text-gray-400 text-sm">
          Created At: {new Date(todo.createdAt).toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default Todo;
