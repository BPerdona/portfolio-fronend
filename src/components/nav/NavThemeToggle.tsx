import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsSunFill} from "react-icons/bs"


export default function NavThemeToggle(){
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    },[theme, setTheme]);

    return (
        <button className="theme-toggle" onClick={handleButtonClick}>
            <IconContext.Provider value={{className: "text-green-400", size:"30"}}>
                {theme=="light" ? <BsSunFill/> : <BsFillMoonStarsFill/>}
            </IconContext.Provider>
        </button>
    )

    function handleButtonClick(){
        theme=="light" ? setTheme("dark") : setTheme("light");
    }
}