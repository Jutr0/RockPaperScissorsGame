import './style.scss'

const Option = ({ type, icon, handlePick }: IProps) => {
    return (
        <button className="optionBtn" onClick={() => handlePick(type)}>
            <img src={"" + icon} alt={type} />
        </button >
    )
}

export default Option;

type IProps = {
    type: "Rock" | "Paper" | "Scissors";
    icon: SVGElement;
    handlePick: (value: "Rock" | "Paper" | "Scissors") => void
}