import { useNavigate } from "react-router-dom";
import "./Widget.css"

const Widget = ({ title, url }: { title: any; url: string; }) => {
    const navigate = useNavigate()
    return (
        <div className="widget-card" onClick={() => navigate(url)} >
            <div className={`title-section`} >
                <p>{title}</p>
                <div>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 1L19 4.75L15.25 1ZM19 4.75L15.25 8.5L19 4.75ZM19 4.75H1H19Z" fill="white" />
                        <path d="M15.25 1L19 4.75M19 4.75L15.25 8.5M19 4.75H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="balance-sections">
                <div className="balance-section">
                    <div>
                        <p>Lot</p>
                        <p>36.39</p>
                    </div>
                    <div>
                        <p>Today Lot</p>
                        <p>0</p>
                    </div>
                </div>
                <div className="balance-section">
                    <div>
                        <p>Lot</p>
                        <p>36.39</p>
                    </div>
                    <div>
                        <p>Today Lot</p>
                        <p>0</p>
                    </div>
                </div>
                <div className="balance-section">
                    <div>
                        <p>Lot</p>
                        <p>36.39</p>
                    </div>
                    <div>
                        <p>Today Lot</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget
