import "./VerifyButton.css";

const VerifyButton = ({ isVerify, onClick }: { isVerify?: boolean; onClick?: (index?: any) => void; }) => {
    return (
        <button onClick={onClick} className={`verify-btn ${isVerify ? "active" : ""}`} >{isVerify ? "ON" : "OFF"}</button>
    )
}

export default VerifyButton
