import React, { Children, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  setTodoList,
  addTodo,

} from "../../state/todoList/todoListSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const todoList = useSelector((state) => state.todoList.items);
  const fetchDummyTodoList = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    console.log("Fetched todo list:", data.todos);
    return data.todos.slice(0, 20);
  };
  useEffect(() => {
    let alive = true; // 防止卸载后仍 dispatch（可选）
    (async () => {
      try {
        const data = await fetchDummyTodoList();
        if (alive) {
          dispatch(setTodoList(data)); // 只 dispatch 纯数据
        }
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    console.log("Redux todoList changed:", todoList);
  }, [todoList]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
      <div className="pending">
        <TodoItem flag="pending" btnList = {["Complete", "Edit", "Delete"]}taskList={todoList.filter((t) => {console.log("ff",t); return !t.completed})} />
      </div>
      <div className="completed">
        <TodoItem flag="completed" btnList = {["Undo", "Delete"]} taskList={todoList.filter((t) => t.completed)} />
      </div>
    </div>
  );
}
