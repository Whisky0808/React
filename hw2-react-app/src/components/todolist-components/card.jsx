import React from "react";
import Item from "./item.jsx";



export default function Card({itemList,buttonList}){
    return(
        <div>
            {itemList.map((item,index)=>(
                <Item key={item.id} title={item.title} buttonList={buttonList} />
            ))}
        </div>
    )
}
