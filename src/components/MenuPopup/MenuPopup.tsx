import "./MenuPopup.css"

const MenuPopup = ({ children }: { children: any }) => {
    return (
        <div className="menu-popup" >
            {children}
        </div>
    )
}

export default MenuPopup;