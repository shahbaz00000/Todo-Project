import { Children, createContext, useReducer } from "react";
import todoReducer from "./TodoProvider";

export const TodoContext = createContext();

const initialState = [];

const TodoProvider = ({children})=>{

    const [todos,dispatch] = useReducer(todoReducer,initialState);

    const setTodo = (todos)=>{
        dispatch:({
            type:'SET-TODO',
            payload:todos
        })
    };
    const addTodo = (todo)=>{
        dispatch:({
            type:'ADD-TODO',
            payload:todo
        })
    };
    const updateTodo = (id,todo)=>{
        dispatch:({
            type:'UPDATE-TODO',
            payload:{id,todo}
        })
    };
    const deleteTodo = (id)=>{
        dispatch:({
           type:'DELETE-TODO',
           payload:id
        })
    };
    return(
        <TodoContext.Provider value={{todos,setTodo,addTodo,updateTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
};
export default TodoProvider