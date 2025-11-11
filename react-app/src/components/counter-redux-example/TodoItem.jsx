import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {

  deleteTodo,
  editTodo,
  switchTodo,
} from "../../state/todoList/todoListSlice";
export default function TodoItem({ flag, taskList, btnList }) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.items);

  useEffect(() => {
    console.log(`TodoItem [${flag}] render:`, {
      count: taskList.length,
      sample: taskList[0],
    });
  }, [flag, taskList]);

  return (
    <ul>
      {taskList &&
        taskList.map((task) => {
          return (
            <li key={task.id}>
              <span>{task.todo}</span>

              {flag === "pending" ? (
                <div>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => dispatch(switchTodo(task))}
                  >
                    Complete
                  </button>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => dispatch(editTodo(task))}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => dispatch(deleteTodo(task))}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => dispatch(switchTodo(task))}
                  >
                    Undo
                  </button>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => dispatch(deleteTodo(task))}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          );
        })}
    </ul>
  );
}
