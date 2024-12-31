import { useRef } from 'react';
import './GatewayForm.css';

const GatewayForm = ({ isOpen, toggleForm, title }: { isOpen: boolean, toggleForm: () => void, title: string }) => {
    const formRef: any = useRef(null);

    return (
        <div className="gateway-container">
            <div className={`header ${isOpen ? `active` : ``}`} onClick={toggleForm}>
                <input type="checkbox" />
                <span>{title}</span>
                <span className={`toggle-icon ${isOpen ? 'open' : ''}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 15.75L12 8.25L4.5 15.75" stroke="#1E1F24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>

            <div
                className={`form-wrapper ${isOpen ? 'active' : ''}`}
                ref={formRef}
                style={{
                    height: isOpen ? `${formRef.current.scrollHeight}px` : '0px',
                }}
            >
                <div className="form-container">
                    <div className="form-row">
                        <input type="text" placeholder="Min. Withdraw" />
                        <input type="text" placeholder="Max. Withdraw" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Min. Deposit" />
                        <input type="text" placeholder="Max. Deposit" />
                    </div>
                    <textarea placeholder="Please Enter Gateway Detail Here"></textarea>
                    <div className="form-row">
                        <input type="text" placeholder="Enter URL" />
                        <input type="text" placeholder="Enter Key" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Enter Secret" />
                        <input type="text" placeholder="Enter Logo" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Company" />
                        <input type="text" placeholder="Currency" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Response URL" />
                        <input type="text" placeholder="Redirect URL" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Mobile Redirect URL" />
                    </div>
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default GatewayForm;
