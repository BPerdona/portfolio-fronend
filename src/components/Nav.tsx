import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import ThemeSwitch from "./ThemeToggle";
import { HiOutlineDownload } from "react-icons/hi"

export default function Nav(){
    const defaultName = "Bruno Perdoná"
    const [name, setName] = useState("")
    const [dot, setDot] = useState("")

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setName(defaultName.slice(0,name.length+1))
        }, 100)
        return () => clearInterval(intervalId)
    })

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            switch(dot){
                case "": {
                    setDot(".")
                    break
                }
                case ".": {
                    setDot("..")
                    break
                }
                case "..": {
                    setDot("...")
                    break
                }
                default: setDot("")
            }
        }, 500)
        return () => clearInterval(intervalId)
    })

    return(
        <nav className="nav">
            <h1 className="nav-name">{name}{dot}<span className="text-green-600">|</span></h1>
            <div className="nav-wrapper">
                <NavButton name={"Início"}/>
                <NavButton name={"Projetos"}/>
                <NavButton name={"Contato"}/>
                <NavButton name={"Curriculo"} icon={<HiOutlineDownload/>}/>
                <NavButton name={"Playground"}/>
            </div>
            <ThemeSwitch/>
        </nav>
    )
}
