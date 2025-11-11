import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    items:[]
}
const todoListSlice = createSlice({
    initialState,
    name:"todoList",
    reducers:{
        setTodoList:(state,action)=>{
            state.items = action.payload
        },
        addTodo:(state,action)=>{
            state.items.unshift({
                id:Date.now().toString(),
                todo:action.payload,
                completed:false,
            });

        },
        deleteTodo:(state,action)=>{
            
            state.items = state.items.filter((t)=>t.id!==action.payload.id);

        },
        editTodo:(state,action)=>{
            const todo = state.items.find((t)=>t.id===action.payload.id);
            if(todo){
                todo.title = action.payload.title;
            }

        },
        switchTodo:(state,action)=>{
            const todo = state.items.find((t)=>t.id===action.payload.id);
            if(todo){
                todo.completed = !todo.completed;
            }
        }


    }
})
// 为了在component里面用他的action函数
export const {setTodoList,addTodo,deleteTodo,editTodo,switchTodo} = todoListSlice.actions;
// 为了在store里面register
export default  todoListSlice.reducer;