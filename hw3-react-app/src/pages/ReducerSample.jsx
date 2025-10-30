import React,{useReducer} from "react";

export default function ReducerSample(){
    const initialState = 0;
    // const [count, setCount]useState(initialState);
    const [count, dispatchEvent] = useReducer(myReducer,initialState);
    function myReducer(state,action){
        switch(action.type){
            case 'add':
                console.log("action state:", action.state);
                return state +1;
            case 'delete':
                console.log("action state:", action.state);
                return state -1;
            default:
                return state;

        }
        
    }

    function handleAdd(state){
        dispatchEvent({
            type:'add',
            state,
        })

    }
    function handleDelete(state){
        dispatchEvent({
            type:'delete',
            state,
        })

    }
    return(
        <>
        <div>{count}</div>
        <button onClick={()=>handleAdd(count)}>Add</button>
        <button onClick={()=>handleDelete(count)}>Delete</button>
        </>
        
    )
}