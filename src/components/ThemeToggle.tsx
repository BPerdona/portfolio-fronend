import { useState } from "react"
import { IconContext } from "react-icons"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsSunFill} from "react-icons/bs"


export default function ThemeToggle(){

    function handleButtonClick(){
        theme=="light" ? setTheme("dark") : setTheme("light")
    }


    const [theme, setTheme] = useState("dark")

    return (
        <button className="theme-toggle" onClick={handleButtonClick}>
            <IconContext.Provider value={{className: "text-green-400", size:"30"}}>
                {theme=="light" ? <BsSunFill/> : <BsFillMoonStarsFill/>}
            </IconContext.Provider>
        </button>
    )
}