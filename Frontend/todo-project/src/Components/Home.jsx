import React from 'react'
import TodoList from './TodoList'
import TodoLoading from './TodoLoader'


const Home = () => {
  return (
    <>
        <TodoLoading>
            <TodoList/>
        </TodoLoading>    
        
    </>
  )
}

export default Home