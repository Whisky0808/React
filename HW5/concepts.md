Answer the following questions in your own language
What is state lifting and props drilling?
    state lifting -- moving the component state to the common ancestor component to share the state while the props drilling is the problems of passing the props through many layers of intermediate components, even if they don't need data, to get it to a deeply nested child

How to avoid props drilling?
    use the UseContext, to share the props to the block level or global level and components can get the props when it is necessary.
Compare useState vs useReducer. When is useReducer a better choice?
    when you need to do multiple operations on the States or when you need to handle a batch of state's status
How to trigger a re-render in React?
    uss the lifecircle hook function, like useEffect
    