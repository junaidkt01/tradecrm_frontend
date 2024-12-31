import { useState } from "react"
import TableComponent from "../../components/TableComponent/TableComponent"
import FilterBtn from "./_components/FilterBtn"
import "./Users.css"
import SearchInput from "../../components/SeachInputs/SearchInput"
import { filter_btns } from "./users_utils"
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs"
import AddUserForm from "./_components/AddUserForm"
import MenuInputsForm from "./_components/MenuInputsForm"

const Users = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState<{ menuType: string; userData: { userId: string | number; name: string } | undefined }>({ menuType: "", userData: { userId: "", name: "" } });
    const [activeEndpoint, setActiveEndpoint] = useState("/verified");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuPopup = (menuType: string, userData?: { userId: string | number, name: string } | undefined) => {
        // setIsMenuOpen(!isMenuOpen);
        setIsMenuOpen({ menuType, userData });
    };

    const handleFilterClick = (value: string) => {
        setActiveEndpoint(value);
    };

    return (
        <div className="users-page pages-wrapper" >
            <Breadcrumbs title={"Users"} />
            <div className="table-control-btns" >
                <div className="search-and-refresh" >
                    <SearchInput />
                    <div className="refresh-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75489 10.059C5.09537 8.78714 5.76467 7.62732 6.69552 6.69614C7.62636 5.76496 8.78594 5.09524 10.0577 4.7543C11.3294 4.41336 12.6685 4.41321 13.9403 4.75388C15.2121 5.09455 16.3718 5.76402 17.3029 6.695L19.2059 8.598H16.0229C15.824 8.598 15.6332 8.67702 15.4926 8.81767C15.3519 8.95832 15.2729 9.14909 15.2729 9.348C15.2729 9.54691 15.3519 9.73768 15.4926 9.87833C15.6332 10.019 15.824 10.098 16.0229 10.098H21.0149C21.2138 10.098 21.4046 10.019 21.5452 9.87833C21.6859 9.73768 21.7649 9.54691 21.7649 9.348V4.356C21.7649 4.15709 21.6859 3.96632 21.5452 3.82567C21.4046 3.68502 21.2138 3.606 21.0149 3.606C20.816 3.606 20.6252 3.68502 20.4846 3.82567C20.3439 3.96632 20.2649 4.15709 20.2649 4.356V7.536L18.3649 5.636C17.2479 4.51845 15.8563 3.71468 14.3301 3.3055C12.8039 2.89632 11.1969 2.89615 9.67065 3.30501C8.14438 3.71386 6.75265 4.51734 5.63538 5.63464C4.51811 6.75195 3.71469 8.14371 3.30589 9.67C3.28041 9.76521 3.27394 9.8645 3.28683 9.96221C3.29973 10.0599 3.33175 10.1541 3.38106 10.2395C3.43036 10.3248 3.496 10.3996 3.57421 10.4596C3.65242 10.5195 3.74168 10.5635 3.83689 10.589C3.9321 10.6145 4.03139 10.6209 4.1291 10.6081C4.22681 10.5952 4.32102 10.5631 4.40636 10.5138C4.4917 10.4645 4.56649 10.3989 4.62646 10.3207C4.68643 10.2425 4.73041 10.1532 4.75589 10.058L4.75489 10.059ZM20.1629 13.411C20.0677 13.3854 19.9685 13.3789 19.8708 13.3917C19.7731 13.4045 19.6789 13.4364 19.5936 13.4856C19.5082 13.5348 19.4334 13.6004 19.3734 13.6785C19.3134 13.7567 19.2694 13.8458 19.2439 13.941C18.9034 15.2129 18.2341 16.3727 17.3033 17.3039C16.3724 18.235 15.2128 18.9048 13.9411 19.2457C12.6694 19.5866 11.3303 19.5868 10.0585 19.2461C8.78665 18.9054 7.62693 18.236 6.69589 17.305L4.79389 15.402H7.97689C8.1758 15.402 8.36656 15.323 8.50722 15.1823C8.64787 15.0417 8.72689 14.8509 8.72689 14.652C8.72689 14.4531 8.64787 14.2623 8.50722 14.1217C8.36656 13.981 8.1758 13.902 7.97689 13.902H2.98389C2.78497 13.902 2.59421 13.981 2.45356 14.1217C2.3129 14.2623 2.23389 14.4531 2.23389 14.652V19.644C2.23389 19.8429 2.3129 20.0337 2.45356 20.1743C2.59421 20.315 2.78497 20.394 2.98389 20.394C3.1828 20.394 3.37356 20.315 3.51422 20.1743C3.65487 20.0337 3.73389 19.8429 3.73389 19.644V16.464L5.63389 18.364C6.75098 19.4815 8.14262 20.2853 9.66886 20.6944C11.1951 21.1035 12.8022 21.1036 14.3285 20.6946C15.8547 20.2857 17.2465 19.4821 18.3637 18.3647C19.4809 17.2472 20.2842 15.8554 20.6929 14.329C20.7442 14.137 20.7172 13.9325 20.6178 13.7603C20.5185 13.5882 20.3548 13.4626 20.1629 13.411Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="export-add-users-btns">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z" stroke="#1E1F24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Export to Excel</span>
                    </button>
                    <button onClick={togglePopup} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9V15M15 12H9M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Add User</span>
                    </button>
                </div>
            </div>
            <div className="filter-btns">
                {
                    filter_btns.map((item, i) => <FilterBtn key={i} isActive={item.endpoint === activeEndpoint} onClick={() => handleFilterClick(item.endpoint)} title={item.title} count={item.count} />)
                }
            </div>
            <TableComponent toggleMenuPopup={toggleMenuPopup} />

            {(isOpen || isMenuOpen.menuType) && (
                <div className="overlay"></div>
            )}

            {isOpen && (
                <AddUserForm togglePopup={togglePopup} />
            )}

            {isMenuOpen.menuType && (
                <MenuInputsForm userData={isMenuOpen} toggleMenuPopup={toggleMenuPopup} />
            )}
        </div>
    )
}
// 53089a4271dd4fda6044376920cb2330
export default Users
