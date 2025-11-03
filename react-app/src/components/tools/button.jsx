export default function Button({label,onClick, children}) {
    return(
        <button onClick={onClick}>{label}</button>
    )
}
