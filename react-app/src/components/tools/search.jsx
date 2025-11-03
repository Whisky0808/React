export default function Search({placeholder,onChange}){
    return(
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}