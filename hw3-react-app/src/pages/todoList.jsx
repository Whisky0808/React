import {
  pendingTasks as pendingInit,
  completedTasks as completedInit,
} from "../components/todolist-components/todoList-data.js";
import Card from "../components/todolist-components/card.jsx";
import Button from "../components/tools/button.jsx";
import Add from "../components/tools/add.jsx";
import "../css/todoList.css";
import useTodoHandler from "./useTodoHandler.jsx";

export default function TodoList() {
  const {
    pendingForCard,
    completedForCard,
    draftTitle,
    setDraftTitle,
    handleAddTask,
    handleEdit,
    handleDelete,
    handleComplete,
    handleSwitch,
  } = useTodoHandler(pendingInit, completedInit);

  return (
    <div className="todo-page">
      <Add
        placeholder="Add tasks..."
        value={draftTitle}
        onChange={(e) => setDraftTitle(e.target.value)}
      />
      <Button label="Add Task" onClick={handleAddTask} />

      <Card
      className="card-item"
        title="Pending"
        itemList={pendingForCard}
        buttonList={["Complete", "Edit", "Delete"]}
        onComplete={handleComplete}
        onEdit={(id) => handleEdit(id, "pending")}
        onDelete={(id) => handleDelete(id, "pending")}
      />

      <Card
      className="card-item"
        title="Completed"
        itemList={completedForCard}
        buttonList={["Switch", "Edit", "Delete"]}
        onSwitch={handleSwitch}
        onEdit={(id) => handleEdit(id, "completed")}
        onDelete={(id) => handleDelete(id, "completed")}
        completed
      />
    </div>
  );
}
