import { useNavigate } from "react-router-dom"
import RoundButton from "../Buttons/RoundButton/RoundButton"
import ToggleSwitch from "../Buttons/ToggleSwitch/ToggleSwitch"
import "./Header.css"
import ProfileCard from "./_components/ProfileCard"
import MobileMenu from "./_components/MobileMenu"
import { useState } from "react"
import LiveDemo from "../Buttons/LiveDemo/LiveDemo"

const Header = () => {
    const navigate = useNavigate()
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu)
    };

    return (
        <div className="header-section" >
            <div className="header-right" >
                <div className="logo">
                    <img src="./logo/logoIcon.svg" alt="Logo" className="logo-img" />
                    <img src="./logo/logoText.svg" alt="Logo" className="logo-img" />
                </div>
                <div className="header-btns" >
                    <div className="toggle-switch-wrapper" >
                        <LiveDemo />
                    </div>
                    <div className="toggle-switch-wrapper" >
                        <ToggleSwitch />
                    </div>
                    <div className="round-btns" >
                        <RoundButton svgIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5975 15.62C15.2913 15.4195 16.9555 15.0198 18.5557 14.4291C17.2006 12.928 16.4518 10.9769 16.4548 8.95459V8.27277C16.4548 6.82613 15.8801 5.43875 14.8572 4.41582C13.8342 3.3929 12.4468 2.81822 11.0002 2.81822C9.55358 2.81822 8.16619 3.3929 7.14327 4.41582C6.12034 5.43875 5.54567 6.82613 5.54567 8.27277V8.95459C5.54841 10.977 4.79929 12.9282 3.44385 14.4291C5.0193 15.0109 6.68021 15.4155 8.40294 15.62M13.5975 15.62C11.872 15.8247 10.1284 15.8247 8.40294 15.62M13.5975 15.62C13.7285 16.029 13.7611 16.4631 13.6926 16.8871C13.6241 17.311 13.4564 17.7128 13.2033 18.0597C12.9501 18.4065 12.6187 18.6888 12.2358 18.8833C11.853 19.0779 11.4296 19.1793 11.0002 19.1793C10.5708 19.1793 10.1474 19.0779 9.76458 18.8833C9.38175 18.6888 9.05028 18.4065 8.79714 18.0597C8.544 17.7128 8.37636 17.311 8.30786 16.8871C8.23936 16.4631 8.27194 16.029 8.40294 15.62" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>} />

                        <div className="message-header-icon" >
                            <RoundButton onClick={() => navigate("/messages")} svgIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.13647 11.691C2.13647 13.1455 3.15738 14.4128 4.59738 14.6246C5.58557 14.77 6.58375 14.8819 7.59102 14.96V19.1819L11.2965 15.4764C11.5478 15.2267 11.8851 15.0826 12.2392 15.0737C13.9678 15.0258 15.692 14.8759 17.4028 14.6246C18.8428 14.4128 19.8637 13.1464 19.8637 11.69V6.21913C19.8637 4.76277 18.8428 3.49641 17.4028 3.28459C15.2828 2.97342 13.1429 2.81755 11.0001 2.81822C8.82557 2.81822 6.68738 2.97732 4.59738 3.28459C3.15738 3.49641 2.13647 4.76368 2.13647 6.21913V11.69V11.691Z" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>} />
                        </div>
                        <>
                            <div className={`menu-icon-responsive ${isMobileMenu ? "active" : ""}`} >
                                <RoundButton onClick={handleMobileMenu} svgIcon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H15" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 4.5H15" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 13.5H15" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>} />
                            </div>

                            {isMobileMenu && <div className="mobile-menu-wrapper" >
                                <MobileMenu onClick={handleMobileMenu} />
                            </div>}
                        </>
                    </div>
                </div>
                <div className="profile-menu-section-wrapper" >
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default Header
