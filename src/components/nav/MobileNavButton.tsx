import { IconContext } from "react-icons"
import {TbMenu2} from "react-icons/tb"

export default function MobileNavButton(){
    const hideShowMenu = () =>{
        document.querySelector(".mobile-menu")?.classList.toggle("hidden")
    }
    return(
        <div className="lg:hidden flex flex-auto pe-5 items-center justify-end">
            <button className="mobile-nav-button" onClick={hideShowMenu}>
                <IconContext.Provider value={{ size:"35"}}>
                    <TbMenu2/>
                </IconContext.Provider>
            </button>
        </div>
        
    )
}