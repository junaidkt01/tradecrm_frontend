import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../../utils/menuItems"
import ProfileCard from "./ProfileCard"
import { useRef, useState } from "react";

const MobileMenu = ({ onClick }: { onClick: () => void }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentUrl = location.pathname;

    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleSubMenuClick = (url: string) => {
        navigate(url);
        onClick()
    };

    const handleNavigate = (item: any, index: number) => {
        scrollTo(0, 0);

        if (item?.subMenus) {
            setActiveMenu(activeMenu === index ? null : index);
        } else {
            navigate(item.url);
            onClick()
        }
    };
    return (
        <div className="mobile-menu" >
            <div className="profile-mobile-menu-section-wrapper" >
                <ProfileCard />
            </div>

            <div className="mobile-menu-btns">
                {
                    menuItems.map((item, index) => {
                        const isActive = activeMenu === index;
                        const dropdownHeight = isActive && dropdownRefs.current[index]
                            ? `${dropdownRefs.current[index]?.scrollHeight}px`
                            : "0px";

                        return (
                            <div key={index}>
                                <div onClick={() => handleNavigate(item, index)} className={`menu-item ${isActive ? "active" : ""} ${item.url === currentUrl ? "current-url" : ""}`}>
                                    <div className="menu-item-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    <p>{item.name}</p>
                                    {item.subMenus && (
                                        <div className="dropdown-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 8.22C14.6394 8.07955 14.4487 8.00066 14.25 8.00066C14.0512 8.00066 13.8606 8.07955 13.72 8.22L9.99999 11.94L6.27999 8.22C6.21133 8.14631 6.12853 8.08721 6.03653 8.04622C5.94453 8.00523 5.84521 7.98319 5.74451 7.98141C5.64381 7.97963 5.54378 7.99816 5.45039 8.03588C5.357 8.0736 5.27217 8.12974 5.20095 8.20096C5.12973 8.27218 5.07359 8.35701 5.03587 8.4504C4.99815 8.54379 4.97962 8.64382 4.9814 8.74452C4.98317 8.84522 5.00522 8.94454 5.04621 9.03654C5.0872 9.12854 5.1463 9.21134 5.21999 9.28L9.46999 13.53C9.61061 13.6705 9.80124 13.7493 9.99999 13.7493C10.1987 13.7493 10.3894 13.6705 10.53 13.53L14.78 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.78 8.22Z" fill="#62636C" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                {item.subMenus && (
                                    <div
                                        ref={el => dropdownRefs.current[index] = el}
                                        style={{ maxHeight: dropdownHeight, transition: "max-height 0.5s ease, opacity 0.3s ease" }}
                                        className={`dropdown-items ${isActive ? "isActive" : ""}`}
                                    >
                                        {item.subMenus.map((subMenu, i) => (
                                            <p key={i} className={`sub-menu-item ${subMenu.url === currentUrl ? "current-url" : ""}`} onClick={() => handleSubMenuClick(subMenu.url)}>{subMenu.name}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default MobileMenu
