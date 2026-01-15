const todoReducer = (currentState,action)=>{
    switch(action.type){
        case 'SET-TODO':
            return action.payload.todos;
        case 'ADD-TODO':
            return [...currentState,action.payload.todo];
        case 'UPDATE-TODO':
            return currentState.map((todo=>todo._id === action.payload._id?action.payload.todo:todo)) 
        case 'DELETE-TODO':
            return currentState.filter((todo=>todo._id !== action.payload._id))          
    }
    
}
export default todoReducer