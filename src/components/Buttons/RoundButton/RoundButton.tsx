import "./RoundButton.css"

const RoundButton = ({ svgIcon, onClick }: { onClick?: () => void; svgIcon: JSX.Element }) => {
    return (
        <button onClick={onClick} className="round-button">{svgIcon}</button>)
}

export default RoundButton
