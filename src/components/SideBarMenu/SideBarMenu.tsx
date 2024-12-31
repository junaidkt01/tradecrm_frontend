import { useRef, useState } from "react";
import "./SideBarMenu.css"
import { menuItems } from "../../utils/menuItems";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoIcon, LogoText } from "./logoIcons";

const SideBarMenu = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleSubMenuClick = (url: string) => {
        navigate(url);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigate = (item: any, index: number) => {
        scrollTo(0, 0);

        if (item?.subMenus) {
            setActiveMenu(activeMenu === index ? null : index);
        } else {
            navigate(item.url);
        }
    };

    const location = useLocation();
    const currentUrl = location.pathname;
    return (
        <div onMouseEnter={() => setIsOpen(true)} className={`side-bar-menu ${isOpen ? 'open' : 'closed'}`}>
            <div className="logo">
                {/* <img src="/logo/logoIcon.svg" alt="Logo" className="logo-img" />
                {isOpen && <img src="/logo/logoText.svg" alt="logoText.svg" />} */}
                <div dangerouslySetInnerHTML={{ __html: LogoIcon }} className="logo-img" />
                {isOpen && <div dangerouslySetInnerHTML={{ __html: LogoText }} className="logo-text" />}
            </div>
            <div className="menu-items">
                <div
                    className="menu-hide-btn"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: "0 10px",
                        margin: isOpen ? "-20px -30px" : "-20px -10px",
                        cursor: "pointer",
                    }}
                    onClick={toggleSidebar} >
                    {isOpen ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72001 9.47C4.57956 9.61063 4.50067 9.80125 4.50067 10C4.50067 10.1988 4.57956 10.3894 4.72001 10.53L8.97001 14.78C9.03867 14.8537 9.12147 14.9128 9.21347 14.9538C9.30547 14.9948 9.40479 15.0168 9.50549 15.0186C9.60619 15.0204 9.70622 15.0018 9.79961 14.9641C9.893 14.9264 9.97783 14.8703 10.049 14.799C10.1203 14.7278 10.1764 14.643 10.2141 14.5496C10.2519 14.4562 10.2704 14.3562 10.2686 14.2555C10.2668 14.1548 10.2448 14.0555 10.2038 13.9635C10.1628 13.8715 10.1037 13.7887 10.03 13.72L6.31001 10L10.03 6.28C10.1037 6.21134 10.1628 6.12854 10.2038 6.03654C10.2448 5.94454 10.2668 5.84523 10.2686 5.74452C10.2704 5.64382 10.2519 5.54379 10.2141 5.4504C10.1764 5.35701 10.1203 5.27218 10.049 5.20096C9.97783 5.12974 9.893 5.0736 9.79961 5.03588C9.70622 4.99816 9.60619 4.97963 9.50549 4.98141C9.40479 4.98319 9.30547 5.00523 9.21347 5.04622C9.12147 5.08721 9.03867 5.14631 8.97001 5.22L4.72001 9.47ZM13.97 5.22L9.72001 9.47C9.57956 9.61063 9.50067 9.80125 9.50067 10C9.50067 10.1988 9.57956 10.3894 9.72001 10.53L13.97 14.78C14.0387 14.8537 14.1215 14.9128 14.2135 14.9538C14.3055 14.9948 14.4048 15.0168 14.5055 15.0186C14.6062 15.0204 14.7062 15.0018 14.7996 14.9641C14.893 14.9264 14.9778 14.8703 15.049 14.799C15.1203 14.7278 15.1764 14.643 15.2141 14.5496C15.2519 14.4562 15.2704 14.3562 15.2686 14.2555C15.2668 14.1548 15.2448 14.0555 15.2038 13.9635C15.1628 13.8715 15.1037 13.7887 15.03 13.72L11.31 10L15.03 6.28C15.1625 6.13783 15.2346 5.94978 15.2312 5.75548C15.2278 5.56118 15.149 5.37579 15.0116 5.23838C14.8742 5.10096 14.6888 5.02225 14.4945 5.01882C14.3002 5.0154 14.1122 5.08752 13.97 5.22Z" fill="black" />
                    </svg> : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.28 10.53C15.4204 10.3894 15.4993 10.1988 15.4993 10C15.4993 9.8012 15.4204 9.6106 15.28 9.47L11.03 5.22C10.9613 5.1463 10.8785 5.0872 10.7865 5.0462C10.6945 5.0052 10.5952 4.9832 10.4945 4.9814C10.3938 4.9796 10.2938 4.9982 10.2004 5.0359C10.107 5.0736 10.0222 5.1297 9.951 5.201C9.8797 5.2722 9.8236 5.357 9.7859 5.4504C9.7481 5.5438 9.7296 5.6438 9.7314 5.7445C9.7332 5.8452 9.7552 5.9445 9.7962 6.0365C9.8372 6.1285 9.8963 6.2113 9.97 6.28L13.69 10L9.97 13.72C9.8963 13.7887 9.8372 13.8715 9.7962 13.9635C9.7552 14.0555 9.7332 14.1548 9.7314 14.2555C9.7296 14.3562 9.7481 14.4562 9.7859 14.5496C9.8236 14.643 9.8797 14.7278 9.951 14.799C10.0222 14.8703 10.107 14.9264 10.2004 14.9641C10.2938 15.0018 10.3938 15.0204 10.4945 15.0186C10.5952 15.0168 10.6945 14.9948 10.7865 14.9538C10.8785 14.9128 10.9613 14.8537 11.03 14.78L15.28 10.53ZM6.03 14.78L10.28 10.53C10.4204 10.3894 10.4993 10.1988 10.4993 10C10.4993 9.8012 10.4204 9.6106 10.28 9.47L6.03 5.22C5.9613 5.1463 5.8785 5.0872 5.7865 5.0462C5.6945 5.0052 5.5952 4.9832 5.4945 4.9814C5.3938 4.9796 5.2938 4.9982 5.2004 5.0359C5.107 5.0736 5.0222 5.1297 4.951 5.201C4.8797 5.2722 4.8236 5.357 4.7859 5.4504C4.7481 5.5438 4.7296 5.6438 4.7314 5.7445C4.7332 5.8452 4.7552 5.9445 4.7962 6.0365C4.8372 6.1285 4.8963 6.2113 4.97 6.28L8.69 10L4.97 13.72C4.8375 13.8622 4.7654 14.0502 4.7688 14.2445C4.7722 14.4388 4.851 14.6242 4.9884 14.7616C5.1258 14.899 5.3112 14.9778 5.5055 14.9812C5.6998 14.9846 5.8878 14.9125 6.03 14.78Z" fill="black" />
                    </svg>}

                </div>
                {
                    menuItems.map((item, index) => {
                        const isActive = activeMenu === index;
                        const dropdownHeight = isActive && dropdownRefs.current[index]
                            ? `${dropdownRefs.current[index]?.scrollHeight}px`
                            : "0px";

                        console.log(item.url)
                        console.log(item.url === currentUrl)
                        return (
                            <div key={index}>
                                <div onClick={() => handleNavigate(item, index)} className={`menu-item ${isActive ? "active" : ""} ${item.url === currentUrl ? "current-url" : ""}`}>
                                    <div className="menu-item-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    {isOpen && <p>{item.name}</p>}
                                    {isOpen && item.subMenus && (
                                        <div className="dropdown-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 8.22C14.6394 8.07955 14.4487 8.00066 14.25 8.00066C14.0512 8.00066 13.8606 8.07955 13.72 8.22L9.99999 11.94L6.27999 8.22C6.21133 8.14631 6.12853 8.08721 6.03653 8.04622C5.94453 8.00523 5.84521 7.98319 5.74451 7.98141C5.64381 7.97963 5.54378 7.99816 5.45039 8.03588C5.357 8.0736 5.27217 8.12974 5.20095 8.20096C5.12973 8.27218 5.07359 8.35701 5.03587 8.4504C4.99815 8.54379 4.97962 8.64382 4.9814 8.74452C4.98317 8.84522 5.00522 8.94454 5.04621 9.03654C5.0872 9.12854 5.1463 9.21134 5.21999 9.28L9.46999 13.53C9.61061 13.6705 9.80124 13.7493 9.99999 13.7493C10.1987 13.7493 10.3894 13.6705 10.53 13.53L14.78 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.78 8.22Z" fill="#62636C" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                {isOpen && item.subMenus && (
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
            <div className="logout-btn-div">
                <div className="logout-btn">
                    <div className="logout-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 9V5.25C12.75 4.65326 12.5129 4.08097 12.091 3.65901C11.669 3.23705 11.0967 3 10.5 3H4.5C3.90326 3 3.33097 3.23705 2.90901 3.65901C2.48705 4.08097 2.25 4.65326 2.25 5.25V18.75C2.25 19.3467 2.48705 19.919 2.90901 20.341C3.33097 20.7629 3.90326 21 4.5 21H10.5C11.0967 21 11.669 20.7629 12.091 20.341C12.5129 19.919 12.75 19.3467 12.75 18.75V15M15.75 15L18.75 12M18.75 12L15.75 9M18.75 12H6" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    {isOpen && <p>Log Out</p>}
                </div>
            </div>
        </div >
    );
};

export default SideBarMenu;


// import { useRef, useState } from "react";
// import "./SideBarMenu.css"
// import { menuItems } from "../../utils/menuItems";
// import { useNavigate } from "react-router-dom";

// const SideBarMenu = () => {
//     const navigate = useNavigate()

//     const [isOpen, setIsOpen] = useState(true);
//     const [isActive, setIsActive] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement>(null);
//     const dropdownHeight = isActive && dropdownRef.current
//         ? `${dropdownRef.current.scrollHeight}px`
//         : "0px";

//     const handleSubMenuClick = (url: string) => {
//         navigate(url);
//     };

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleNavigate = (value: any) => {
//         scrollTo(0, 0)

//         if (value?.subMenus) {
//             setIsActive(!isActive);
//         } else {
//             navigate(value.url);
//         }
//     }

//     return (
//         <div className={`side-bar-menu ${isOpen ? 'open' : 'closed'}`}>
//             <div className="logo" onClick={toggleSidebar}>
//                 <img src="/logo/logoIcon.svg" alt="Logo" className="logo-img" />
//                 {isOpen && <img src="/logo/logoText.svg" alt="logoText.svg" />}
//             </div>
//             <div className="menu-items" >
//                 {
//                     menuItems.map((item, i) => {
//                         return (
//                             <div>
//                                 <div onClick={() => handleNavigate(item)} key={i} className="menu-item">

//                                     <div className="menu-item-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
//                                     {isOpen && <p>{item.name}</p>}

//                                     {isOpen && item.subMenus && <div className="dropdown-icon" ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 8.22C14.6394 8.07955 14.4487 8.00066 14.25 8.00066C14.0512 8.00066 13.8606 8.07955 13.72 8.22L9.99999 11.94L6.27999 8.22C6.21133 8.14631 6.12853 8.08721 6.03653 8.04622C5.94453 8.00523 5.84521 7.98319 5.74451 7.98141C5.64381 7.97963 5.54378 7.99816 5.45039 8.03588C5.357 8.0736 5.27217 8.12974 5.20095 8.20096C5.12973 8.27218 5.07359 8.35701 5.03587 8.4504C4.99815 8.54379 4.97962 8.64382 4.9814 8.74452C4.98317 8.84522 5.00522 8.94454 5.04621 9.03654C5.0872 9.12854 5.1463 9.21134 5.21999 9.28L9.46999 13.53C9.61061 13.6705 9.80124 13.7493 9.99999 13.7493C10.1987 13.7493 10.3894 13.6705 10.53 13.53L14.78 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.78 8.22Z" fill="#62636C" />
//                                     </svg>
//                                     </div>}
//                                 </div>
//                                 {isOpen && item.subMenus && <div
//                                     ref={dropdownRef}
//                                     style={{ maxHeight: dropdownHeight, transition: "max-height 0.5s ease, opacity 0.3s ease" }}
//                                     className={`dropdown-items ${isActive ? "isActive" : ""}`}
//                                 >
//                                     {
//                                         item.subMenus.map((subMenu, i) => <p key={i} onClick={() => handleSubMenuClick(subMenu.url)} >{subMenu.name}</p>)
//                                     }
//                                 </div>}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <div className="logout-btn-div" >
//                 <div className="logout-btn">
//                     <div className="logout-icon" >
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M12.75 9V5.25C12.75 4.65326 12.5129 4.08097 12.091 3.65901C11.669 3.23705 11.0967 3 10.5 3H4.5C3.90326 3 3.33097 3.23705 2.90901 3.65901C2.48705 4.08097 2.25 4.65326 2.25 5.25V18.75C2.25 19.3467 2.48705 19.919 2.90901 20.341C3.33097 20.7629 3.90326 21 4.5 21H10.5C11.0967 21 11.669 20.7629 12.091 20.341C12.5129 19.919 12.75 19.3467 12.75 18.75V15M15.75 15L18.75 12M18.75 12L15.75 9M18.75 12H6" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//                     </div>
//                     {isOpen && <p>Log Out</p>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SideBarMenu
