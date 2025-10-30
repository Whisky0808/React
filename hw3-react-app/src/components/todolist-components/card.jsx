// Card.jsx
import React from "react";
import "../../css/card.css";
import Item from "./item.jsx";

export default function Card({
  title,
  itemList = [],
  buttonList = [],
  onComplete,
  onDelete,
  onEdit,
  onSwitch,
  completed = false,
  className = "",
}) {
  console.log("[Card] render:", {
    title,
    count: itemList.length,
    sample: itemList[0],
  });

  const handleClick = (btn, id) => {
    switch (btn) {
      case "Complete":
        onComplete && onComplete(id);
        break;
      case "Delete":
        onDelete && onDelete(id);
        break;
      case "Edit":
        onEdit && onEdit(id);
        break;
      case "Switch":
        onSwitch && onSwitch(id);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`card ${className}`}>
      <div className="task-title">{title && <h3>{title}</h3>}</div>
      <div className="task-list">
        {itemList.length > 0 && (
          <Item
            itemList={itemList}
            buttonList={buttonList}
            handleClick={handleClick}
            completed={completed}
          />
        )}
        {itemList.length === 0 && <div className="empty">No tasks</div>}
      </div>
    </div>
  );
}
