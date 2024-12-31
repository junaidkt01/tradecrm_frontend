import { menuItems } from "../../utils/menuItems";
import SidebarButton from "./_components/SidebarButton";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="side-bar" >
            <div className="sidebar-content-wrapper" >
                <div className="top-logo" >
                    <img src="/logo.svg" alt="" />
                </div>

                <div className="sidebar-buttons">
                    {
                        menuItems.map((item, i) => <SidebarButton key={i} item={item} />)
                    }
                </div>
                <div className="logout-btn" >
                    <SidebarButton item={{ icon: "", id: 36, name: "logout", url: "loguot" }} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
