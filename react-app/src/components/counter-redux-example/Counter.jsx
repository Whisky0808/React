import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../state/counter/counterSlice';

export default function Counter(){
    // 当你的 React 组件渲染时，useSelector 会查看 Redux store 中的当前全局状态树（Global State Tree）。
    // useSelector 内部会调用你提供的这个箭头函数。
    // 在调用时，useSelector 会把完整的全局 Redux 状态作为第一个（也是唯一的）参数传递给你定义的 state 变量。
    const counter = useSelector((state) =>state.counter.value)
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Counter:{counter}</h2>
            {/* dispatch action , 告诉它，我要派发的是这个，上面引用了的，没有payload也要写（），是个函数*/}
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount 5</button>
        </div>
    )


}