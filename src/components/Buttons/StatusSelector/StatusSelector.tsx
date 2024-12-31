// import { useState } from "react";
// import MenuPopup from "../../MenuPopup/MenuPopup"
import "./StatusSelector.css"

const StatusSelector = ({ status }: { status: string }) => {
    // const [open, setOpen] = useState<boolean>(false);
    console.log(status)
    return (
        <div>
            <div className="status-selector" >
                <p>Pending</p>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6.75L9.5 11.25L14 6.75" stroke="#FF7900" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                {/* <MenuPopup>
                    <p>Approve</p>
                    <p>Pending</p>
                    <p>Reject</p>
                </MenuPopup> */}
            </div>
        </div>
    )
}

export default StatusSelector

// <select className="status-selector" >
//     <option value="pending">Pending</option>
//     <option value="approve">Approve</option>
//     <option value="reject">Reject</option>
// </select>