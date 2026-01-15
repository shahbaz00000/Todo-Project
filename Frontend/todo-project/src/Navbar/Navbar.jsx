import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="bg-blue-400 px-6 py-4 flex items-center gap-6 shadow-md">
        <Link
          to="/todo"
          className="text-black text-lg font-semibold hover:text-white transition"
        >
          Todo App
        </Link>

        <Link
          to="/todo-create"
          className="text-black text-lg font-semibold hover:text-white transition"
        >
          Create
        </Link>
      </nav>
    </>
  )
}

export default Navbar