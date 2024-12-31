import "./PrimaryButton.css"

const PrimaryButton = ({ title, btnStyle, onClick, type }: { title: string; btnStyle?: any; onClick?: () => void; type?: "submit" | "reset" | "button" }) => {
    return (
        <button className="primary-button" type={type} style={btnStyle} onClick={onClick} >{title}</button>
    )
}

export default PrimaryButton
