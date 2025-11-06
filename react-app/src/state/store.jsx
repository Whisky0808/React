import {configureStore} from "@reduxjs/toolkit"
import counterSlice from '../state/counter/counterSlice'
// the main file, like a summary file or entry file for the gobal state management 
export const store = configureStore({
    // put the slice reduces here
    reducer:{
        counter:counterSlice,
    },
});