import React, { useState } from "react";
import initialItems from "./data.js";
export default function ItemsList() {
  const [money, setMoney] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [itemsList, setItemsList] = useState(initialItems);

  function updateStock(item) {
    console.log(itemsList);
    if (wallet >= item.price && item.stock > 0) {
      setWallet(wallet - item.price);
   
      setItemsList((prev) => 
        prev.map((i) => (i.id === item.id ? { ...i, stock: i.stock - 1 } : i))
      );
      console.log(itemsList)
      alert(`You have bought ${item.name}`);
    } else if (item.stock <= 0) {
      alert("Item out of stock");
    } else {
      alert("Insufficient balance");
    }
  }

  function handleMoney() {
    setWallet((prev) => {
      console.log("prev:", prev, typeof prev);
      return prev + money;
    });
    setMoney(0);
  }
  // useEffect(()=>{
  //     console.log(List)
  // },[])
  return (
    <div>
      <div className="add-money-input">
        <input
          type="text"
          placeholder={"Add your money"}
          value={money}
          onChange={(e) => {
            setMoney(Number(e.target.value));
          }}
        />
        <button onClick={handleMoney}>ADD MONEY</button>
      </div>
      <h2>Items List</h2>
      <h2>{`wallet $ :${wallet}`}</h2>
      <ul>
        <li
          style={{

            display: "flex",
            gap: "20px",
          }}
        >
          <span style={{ width: "100px" }}>NAME</span>
          <span  style={{ width: "50px" }}>PRICE</span>
          <span  style={{ width: "50px" }}>STOCK</span>
          <span  style={{ width: "50px" }}>ACTION</span>
        </li>
        {itemsList.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <span style={{ width: "100px" }}>{item.name}</span>
              <span style={{ width: "50px" }}>{item.price}</span>
              <span style={{ width: "50px" }}>{item.stock}</span>
             
              <button
                onClick={() => {
                  updateStock(item);
                }}
                style={{
                  width: "40px",
                  height: "15px",
                  backgroundColor: "red",
                  font: "10px bold solid",
                  color: "white",
                }}
              >
                {" "}
                BUY
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
