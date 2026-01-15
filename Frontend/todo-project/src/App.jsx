import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import TodoProvider from "./store/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <h1>building todo Project</h1>
          <Routes>
            <Route path="/todo" element={<Home/>} />
            <Route path="/todo-create" element={<Create/>} />
          </Routes>
        </BrowserRouter>
        </TodoProvider>
      
    </>
  );
}

export default App;
