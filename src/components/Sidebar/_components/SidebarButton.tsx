import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../../../utils/menuItems";

const SidebarButton = ({ item }: { item: MenuItems }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownHeight = isActive && dropdownRef.current
        ? `${dropdownRef.current.scrollHeight}px`
        : "0px";

    const handleButtonClick = () => {
        if (item.subMenus) {
            setIsActive(!isActive);
        } else {
            navigate(item.url);
        }
    };

    const handleSubMenuClick = (url: string) => {
        navigate(url);
    };

    return (
        <div className="sidebar-button">
            <button
                onClick={handleButtonClick}
                className={`btn-title ${isActive ? "isActive" : ""}`}
            >
                <span>
                    <UserIcon isActive={isActive} />
                    {item.name}
                </span>
                {item.subMenus && <DropdownIcon isActive={isActive} />}
            </button>

            {item.subMenus && (
                <div
                    ref={dropdownRef}
                    style={{ maxHeight: dropdownHeight, transition: "max-height 0.5s ease, opacity 0.3s ease" }}
                    className={`dropdown-btns ${isActive ? "isActive" : ""}`}
                >
                    {item.subMenus.map((subItem, i) => (
                        <button
                            key={i}
                            onClick={() => handleSubMenuClick(subItem.url)}
                        >
                            <UserIcon isActive={false} />
                            {subItem.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const UserIcon = ({ isActive }: { isActive: boolean }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
            stroke={isActive ? "white" : "#62636C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
    </svg>
);

const DropdownIcon = ({ isActive }: { isActive: boolean }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd" clipRule="evenodd"
            d="M14.7799 8.22C14.6393 8.07955 14.4487 8.00066 14.2499 8.00066C14.0512 8.00066 13.8606 8.07955 13.7199 8.22L9.99993 11.94L6.27993 8.22C6.21127 8.14631 6.12846 8.08721 6.03647 8.04622C5.94447 8.00523 5.84515 7.98319 5.74445 7.98141C5.64375 7.97963 5.54372 7.99816 5.45033 8.03588C5.35694 8.0736 5.27211 8.12974 5.20089 8.20096C5.12967 8.27218 5.07353 8.35701 5.0358 8.4504C4.99808 8.54379 4.97956 8.64382 4.98134 8.74452C4.98311 8.84522 5.00515 8.94454 5.04615 9.03654C5.08714 9.12854 5.14624 9.21134 5.21993 9.28L9.46993 13.53C9.61055 13.6705 9.80118 13.7493 9.99993 13.7493C10.1987 13.7493 10.3893 13.6705 10.5299 13.53L14.7799 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.7799 8.22Z"
            fill={isActive ? "white" : "#62636C"}
        />
    </svg>
);

export default SidebarButton;


// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { MenuItems } from "../../../utils/menuItems";

// const SidebarButton = ({ item }: { item: MenuItems }) => {
//     // const { pathname } = useLocation();
//     const navigate = useNavigate();
//     // const isActive = item.url === pathname;

//     const [isActive, setIsOpen] = useState(false)

//     const dropdownRef = useRef<HTMLDivElement>(null);
//     const [dropdownHeight, setDropdownHeight] = useState<string>("0px");

//     useEffect(() => {
//         if (dropdownRef.current) {
//             const scrollHeight = dropdownRef.current.scrollHeight;
//             setDropdownHeight(isActive ? `${scrollHeight}px` : "0px");
//         }
//     }, [isActive]);

//     return (
//         <div onClick={() => {
//             if (item.subMenus) {
//                 setIsOpen(!isActive)
//             } else {
//                 navigate(item.url)
//             }
//         }} className="sidebar-button">
//             <button className={`btn-title ${isActive ? "isActive" : ""}`}>
//                 <span>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
//                             stroke={isActive ? "white" : "#62636C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     {item.name}
//                 </span>
//                 {item.subMenus && (
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             fillRule="evenodd" clipRule="evenodd"
//                             d="M14.7799 8.22C14.6393 8.07955 14.4487 8.00066 14.2499 8.00066C14.0512 8.00066 13.8606 8.07955 13.7199 8.22L9.99993 11.94L6.27993 8.22C6.21127 8.14631 6.12846 8.08721 6.03647 8.04622C5.94447 8.00523 5.84515 7.98319 5.74445 7.98141C5.64375 7.97963 5.54372 7.99816 5.45033 8.03588C5.35694 8.0736 5.27211 8.12974 5.20089 8.20096C5.12967 8.27218 5.07353 8.35701 5.0358 8.4504C4.99808 8.54379 4.97956 8.64382 4.98134 8.74452C4.98311 8.84522 5.00515 8.94454 5.04615 9.03654C5.08714 9.12854 5.14624 9.21134 5.21993 9.28L9.46993 13.53C9.61055 13.6705 9.80118 13.7493 9.99993 13.7493C10.1987 13.7493 10.3893 13.6705 10.5299 13.53L14.7799 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.7799 8.22Z"
//                             fill={isActive ? "white" : "#62636C"} />
//                     </svg>
//                 )}
//             </button>

//             <div
//                 ref={dropdownRef}
//                 style={{ maxHeight: dropdownHeight, transition: "max-height 0.5s ease, opacity 0.3s ease" }}
//                 className={`dropdown-btns ${isActive && item.subMenus ? "isActive" : ""}`}
//             >
//                 {item?.subMenus?.map((subItem, i) => (
//                     <button key={i}>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
//                                 stroke={false ? "white" : "#62636C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         {subItem.name}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SidebarButton;


// import { useState, useRef, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { MenuItems } from "../../../utils/menuItems";

// const SidebarButton = ({ item }: { item: MenuItems }) => {
//     const { pathname } = useLocation();
//     const navigate = useNavigate();
//     const isActive = item.url === pathname;

//     const dropdownRef: any = useRef(null);
//     const [dropdownHeight, setDropdownHeight] = useState(0);

//     useEffect(() => {
//         if (isActive && dropdownRef.current) {
//             setDropdownHeight(dropdownRef.current.scrollHeight);
//         } else {
//             setDropdownHeight(0);
//         }
//     }, [isActive]);

//     return (
//         <div onClick={() => navigate(item.url)} className="sidebar-button">
//             <button className={`btn-title ${isActive ? "isActive" : ""}`}>
//                 <span>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
//                             stroke={isActive ? "white" : "#62636C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     {item.name}
//                 </span>
//                 {item.subMenus && (
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             fillRule="evenodd" clipRule="evenodd"
//                             d="M14.7799 8.22C14.6393 8.07955 14.4487 8.00066 14.2499 8.00066C14.0512 8.00066 13.8606 8.07955 13.7199 8.22L9.99993 11.94L6.27993 8.22C6.21127 8.14631 6.12846 8.08721 6.03647 8.04622C5.94447 8.00523 5.84515 7.98319 5.74445 7.98141C5.64375 7.97963 5.54372 7.99816 5.45033 8.03588C5.35694 8.0736 5.27211 8.12974 5.20089 8.20096C5.12967 8.27218 5.07353 8.35701 5.0358 8.4504C4.99808 8.54379 4.97956 8.64382 4.98134 8.74452C4.98311 8.84522 5.00515 8.94454 5.04615 9.03654C5.08714 9.12854 5.14624 9.21134 5.21993 9.28L9.46993 13.53C9.61055 13.6705 9.80118 13.7493 9.99993 13.7493C10.1987 13.7493 10.3893 13.6705 10.5299 13.53L14.7799 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.7799 8.22Z"
//                             fill={isActive ? "white" : "#62636C"} />
//                     </svg>
//                 )}
//             </button>

//             <div
//                 ref={dropdownRef}
//                 style={{ maxHeight: `${dropdownHeight}px` }}
//                 className={`dropdown-btns ${isActive && item.subMenus ? "isActive" : ""}`}
//             >
//                 {item?.subMenus?.map((subItem, i) => (
//                     <button key={i}>{subItem.name}</button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SidebarButton;


// import { useLocation, useNavigate } from "react-router-dom"
// import { MenuItems } from "../../../utils/menuItems"

// const SidebarButton = ({ item }: { item: MenuItems }) => {
//     const { pathname } = useLocation()
//     const navigate = useNavigate()
//     const isActive = item.url === pathname

//     return (
//         <div onClick={() => navigate(item.url)} className="sidebar-button">
//             <button className={`btn-title ${isActive ? "isActive" : ""}`}>
//                 <span>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
//                             stroke={isActive ? "white" : "#62636C"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     {item.name}
//                 </span>
//                 {item.subMenus && (
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             fillRule="evenodd" clipRule="evenodd"
//                             d="M14.7799 8.22C14.6393 8.07955 14.4487 8.00066 14.2499 8.00066C14.0512 8.00066 13.8606 8.07955 13.7199 8.22L9.99993 11.94L6.27993 8.22C6.21127 8.14631 6.12846 8.08721 6.03647 8.04622C5.94447 8.00523 5.84515 7.98319 5.74445 7.98141C5.64375 7.97963 5.54372 7.99816 5.45033 8.03588C5.35694 8.0736 5.27211 8.12974 5.20089 8.20096C5.12967 8.27218 5.07353 8.35701 5.0358 8.4504C4.99808 8.54379 4.97956 8.64382 4.98134 8.74452C4.98311 8.84522 5.00515 8.94454 5.04615 9.03654C5.08714 9.12854 5.14624 9.21134 5.21993 9.28L9.46993 13.53C9.61055 13.6705 9.80118 13.7493 9.99993 13.7493C10.1987 13.7493 10.3893 13.6705 10.5299 13.53L14.7799 9.28C14.9204 9.13938 14.9993 8.94875 14.9993 8.75C14.9993 8.55125 14.9204 8.36063 14.7799 8.22Z"
//                             fill={isActive ? "white" : "#62636C"} />
//                     </svg>
//                 )}
//             </button>

//             <div className={`dropdown-btns ${(item.url === pathname && item.subMenus) ? "isActive" : ""}`}>
//                 {
//                     item?.subMenus?.map((subItem, i) => <button key={i}>{subItem.name}</button>)
//                 }
//             </div>

//         </div>
//     )
// }

// export default SidebarButton;