import { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ onSearchChange }: { onSearchChange: (value: string) => void }) => {
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
        const newValue = event.target.value;
        setValue(newValue);
        onSearchChange(newValue);
    };

    return (
        <div className="search-input">
            <input
                type="search"
                value={value}
                placeholder="Search Here"
                onChange={handleChange}
            />
            <div className="search-icon">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51031 17.2096 6.60258 15.803 5.196C14.3965 3.78943 12.4887 2.99922 10.4995 2.99922C8.51035 2.99922 6.60262 3.78943 5.19605 5.196C3.78947 6.60258 2.99927 8.51031 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;



// import "./SearchInput.css"

// const SearchInput = () => {
//     return (
//         <div className="search-input" >
//             <input type="search" placeholder="Search Here" />
//             <div className="search-icon" >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51031 17.2096 6.60258 15.803 5.196C14.3965 3.78943 12.4887 2.99922 10.4995 2.99922C8.51035 2.99922 6.60262 3.78943 5.19605 5.196C3.78947 6.60258 2.99927 8.51031 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//             </div>
//         </div>
//     )
// }

// export default SearchInput