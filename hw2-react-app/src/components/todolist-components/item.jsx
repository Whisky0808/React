import Button from '../tools/button.jsx';
export default function Item({buttonList,title}){
    return(
        <li>
            {title}
            {buttonList.map((button,index)=>{
                return <Button key={index} label={button} onClick={() => console.log(`${button} clicked`)} />;
            })}
        </li>
    )
}
                
