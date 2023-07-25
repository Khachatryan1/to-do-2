export const Button = ({onClick, className, text}) => {
    return <button onClick={onClick} className={className}>{text}</button>
}