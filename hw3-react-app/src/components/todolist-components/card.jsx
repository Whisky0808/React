// Card.jsx
import React from "react";
import "../../css/card.css"


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
 
  console.log("[Card] render:", { title, count: itemList.length, sample: itemList[0] });

  const handleClick = (btn, id) => {
    switch (btn) {
      case "Complete": onComplete && onComplete(id); break;
      case "Delete":   onDelete && onDelete(id);     break;
      case "Edit":     onEdit && onEdit(id);         break;
      case "Switch":   onSwitch && onSwitch(id);     break;
      default: break;
    }
  };

  return (
    <div className={`card ${className}`}>
      {title && <h3>{title}</h3>}
      {itemList.length ? (
        itemList.map(item => (
          <div key={item.id} className={`task-item ${completed ? "completed" : ""}`}>
            <span >{item.name}</span>
              {buttonList.map(btn => (
                <button key={btn} onClick={() => handleClick(btn, item.id)}>{btn}</button>
              ))}
          </div>
        ))
      ) : (
        <div className="empty">No tasks</div>
      )}
    </div>
  );
}
