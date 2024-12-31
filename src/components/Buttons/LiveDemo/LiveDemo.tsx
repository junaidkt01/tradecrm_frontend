import { useEffect, useState } from "react";
import "./LiveDemo.css"

const ToggleSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('isLive', theme);
        localStorage.setItem('isLive', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`toggle-container ${theme === 'dark' ? 'night' : ''}`} onClick={toggleTheme}>
            <div className={`toggle-button ${theme === 'dark' ? 'dark' : 'white'}`}></div>

            {/* <div className="icon sun-icon" >Demo</div>
            <div className="icon moon-icon" >Live</div> */}

        </div>
    )
}

export default ToggleSwitch
