import {configureStore} from "@reduxjs/toolkit"
import counterSlice from '../state/counter/counterSlice'
import todoListSlice from './todoList/todoListSlice'

// 在 store.js 中： 你创建并配置了你的 Redux store 实例
// <Provider store={store}>
// the main file, like a summary file or entry file for the gobal state management 
export const store = configureStore({
    // put the slice reduces here
    reducer:{
        counter:counterSlice,
        todoList:todoListSlice,



    },
});