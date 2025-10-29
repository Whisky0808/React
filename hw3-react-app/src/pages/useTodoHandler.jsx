import React, { useState, useMemo, useEffect } from "react";

export default function useTodoHandler(pendingInit, completedInit) {
  
  const initialPending = Array.isArray(pendingInit) ? pendingInit : [];
  const initialCompleted = Array.isArray(completedInit) ? completedInit : [];

  const [pending, setPendingTasks] = useState(initialPending);
  const [completed, setCompletedTasks] = useState(initialCompleted);
  const [draftTitle, setDraftTitle] = useState("");

  const adaptForCard = (list) =>
    Array.isArray(list)
      ? list
          .filter((t) => t && typeof t.id !== "undefined")
          .map((t) => ({
            id: String(t.id),
            name: typeof t.title === "string" ? t.title : "",
          }))
      : [];

  const pendingForCard = useMemo(() => adaptForCard(pending), [pending]);
  const completedForCard = useMemo(() => adaptForCard(completed), [completed]);

  useEffect(() => {
    console.log("[mount] pendingInit:", pendingInit);
    console.log("[mount] completedInit:", completedInit);
    console.log("[mount] initial state pending:", initialPending);
    console.log("[mount] initial state completed:", initialCompleted);
  }, []);

  useEffect(() => {
    console.log("[state] pending:", pending);
    console.log("[state] completed:", completed);
  }, [pending, completed]);

  useEffect(() => {
    console.log("[computed] pendingForCard:", pendingForCard);
    console.log("[computed] completedForCard:", completedForCard);
  }, [pendingForCard, completedForCard]);

  const handleAddTask = () => {
    const title = (draftTitle || "").trim();
    if (!title) {
      console.warn("[add] empty title ignored");
      return;
    }
    const newTask = { id: Date.now().toString(), title };
    setPendingTasks((prev) => [newTask, ...prev]);
    setDraftTitle("");
    console.log("[add] new task:", newTask);
  };

  const handleEdit = (id, from = "pending") => {
    const list = from === "pending" ? pending : completed;
    const toSet = from === "pending" ? setPendingTasks : setCompletedTasks;
    const t = list.find((x) => String(x.id) === String(id));
    if (!t) {
      console.warn("[edit] task not found:", id, "from:", from);
      return;
    }
    const next = window.prompt("Edit task title", t.title ?? "");
    if (next == null) return;
    const title = next.trim();
    toSet(list.map((x) => (String(x.id) === String(id) ? { ...x, title } : x)));
    console.log("[edit] task updated:", id, "from:", from, "title:", title);
  };

  const handleDelete = (id, from = "pending") => {
    if (!window.confirm("Delete this task?")) return;
    if (from === "pending") {
      setPendingTasks(pending.filter((x) => String(x.id) !== String(id)));
    } else {
      setCompletedTasks(completed.filter((x) => String(x.id) !== String(id)));
    }
    console.log("[delete] task:", id, "from:", from);
  };

  const handleComplete = (id) => {
    const t = pending.find((x) => String(x.id) === String(id));
    if (!t) {
      console.warn("[complete] task not found:", id);
      return;
    }
    setPendingTasks(pending.filter((x) => String(x.id) !== String(id)));
    setCompletedTasks([{ ...t }, ...completed]);
    console.log("[complete] moved to completed:", id);
  };

  const handleSwitch = (id) => {
    const t = completed.find((x) => String(x.id) === String(id));
    if (!t) {
      console.warn("[switch] task not found:", id);
      return;
    }
    setCompletedTasks(completed.filter((x) => String(x.id) !== String(id)));
    setPendingTasks([{ ...t }, ...pending]);
    console.log("[switch] moved to pending:", id);
  };

  return {
    pendingForCard,
    completedForCard,
    draftTitle,
    setDraftTitle,
    handleAddTask,
    handleEdit,
    handleDelete,
    handleComplete,
    handleSwitch,
  };
}
