import React from "react";
import "../../css/card.css"
export default function Item(itemList, buttonList, handleClick, completed) {
    
    const IList = itemList.itemList;
    console.log("[Item] render:", { count: IList.length, sample: IList[0] });

  return (
    <>
      {IList.map((item) => (
        
        <div
          key={item.id}
          className={`task-item ${completed ? "completed" : ""}`}
        >
          <span>{item.name}</span>
          <div className="task-buttons">    
          {itemList.buttonList.map((btn) => (
            <button style={{ marginLeft: "4px", display: "flex", flexDirection: "row" }} key={btn} onClick={() => handleClick(btn, item.id)}>
              {btn}
            </button>
          ))}
          </div>
        </div>
      ))}
    </>
  );
}
