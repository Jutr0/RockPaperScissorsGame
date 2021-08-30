import "./style.scss"


const Counter = ({ name, points }: IProps) => {
    return (
        <div className="counter">{`${ name }: ${ points }`}</div>
    )
}

export default Counter;

type IProps = {
    name: string,
    points: number,
}