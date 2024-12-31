import { useState } from "react";
import "./Permission.css"
import PermissionCard from "./_components/PermissionCard";
import AddPermsnForm from "./_components/AddPermsnForm";
import AddBtn from "../../components/Buttons/AddBtn/AddBtn";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";

const Permission = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="executives-page pages-wrapper" >
            <Breadcrumbs title="Exicutives / Permissions" />
            <div className="table-control-btns">
                <div className="executives-filter-btns" >
                </div>
                <div className="add-executives-btns">
                    <AddBtn title="Add Permissions" onClick={togglePopup} />
                </div>
            </div>
            <div className="permission-cards">
                <PermissionCard />
                <PermissionCard />
                <PermissionCard />
                <PermissionCard />
                <PermissionCard />
            </div>


            {isOpen && (
                <div className="overlay"></div>
            )}
            {isOpen && (
                <AddPermsnForm togglePopup={togglePopup} />
            )}
        </div>
    )
}

export default Permission
