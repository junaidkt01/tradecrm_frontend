import "./ToastMessage.css"

export const SuccessToast = () => {
    return (
        <div className="success-toast" >
            <div>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" fill="#009800" stroke="#009800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5 30L27.5 35L37.5 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div>
                <p className="toast-message">Success!</p>
                <p className="toast-desc" >Your action was completed successfully</p>
            </div>
            <div className="buttons" >
                <button className="continue-btn" >Continue</button>
                <button className="cancel-btn" >Cancel</button>
            </div>
        </div >
    )
}