import { ReactElement } from "react"
import { IconContext } from "react-icons"
import './index.css'

interface ButtonProps{
    name: string
    onClick?: () => void
    icon?: ReactElement
    anchor?: string
}

export default function Button(props: ButtonProps){
    return(
        <a href={props.anchor} download>        
            <button className="btn" onClick={props.onClick}>
                {props.name}
                <IconContext.Provider value={{color: "white", size:"1.4em", className:"btn-icon"}}>
                    {props.icon}
                </IconContext.Provider>
            </button>
        </a>
    )
}