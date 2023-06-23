import { ReactElement } from "react";
import { IconContext } from "react-icons";

interface ButtonProps{
    name: string;
    onClick?: () => void;
    icon?: ReactElement;
}

export default function NavButton(props: ButtonProps){
    return(
        <button className="nav-btn" onClick={props.onClick}>
            {props.name}
            <IconContext.Provider value={{color: "white", size:"1.4em", className:"nav-btn-icon"}}>
                {props.icon}
            </IconContext.Provider>
        </button>
    )
}