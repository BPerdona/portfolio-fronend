import "./index.css"
import { HiOutlineDownload } from "react-icons/hi";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons"
import { TbBrandAndroid, TbBrandDjango, TbBrandFigma, TbBrandGit, TbBrandJavascript, TbBrandKotlin, TbBrandMysql, TbBrandPython, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbMenu2} from "react-icons/tb"
import Button from "../../components/botton/Button";
import ThemeToggle from "../../components/theme_toggle/ThemeToggle";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";
import Chip from "../../components/chip/Chip";

function LandingPage(){
    const defaultName = "Bruno Perdoná"
    const [name, setName] = useState("")
    const [dot, setDot] = useState("")

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setName(defaultName.slice(0,name.length+1))
        }, 100)
        return () => clearInterval(intervalId)
    })

    const hideShowMenu = () =>{
        document.querySelector(".mobile-menu")?.classList.toggle("hidden")
    }

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
        <div>
            {/* NavBar */}
            <nav className="sticky top-0 z-50 drop-shadow-xl">
                <div className="nav">
                    <h1 className="nav-name">{name}{dot}<span className="text-green-600">|</span></h1>
                    <div className="nav-wrapper">
                        <Button name={"Início"}/>
                        <Button name={"Projetos"}/>
                        <Button name={"Contato"}/>
                        <Button 
                            name={"Curriculo"} 
                            icon={<HiOutlineDownload/>}
                            anchor="../../curriculum.txt"/>
                        <Button name={"Playground"}/>
                    </div>
                    <ThemeToggle classNames="theme-toggle me-5"/>
                    <div className="mobile-nav-button-wraper">
                        <button className="mobile-nav-button" onClick={hideShowMenu}>
                            <IconContext.Provider value={{ size:"35"}}>
                                <TbMenu2/>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
                <div className="mobile-menu hidden">
                    <a href="#" className="mobile-menu-button">Início</a>
                    <a href="#" className="mobile-menu-button">Projetos</a>
                    <a href="#" className="mobile-menu-button">Contato</a>
                    <a href="#" className="mobile-menu-button">Curriculo</a>
                    <a href="#" className="mobile-menu-button">Playground</a>
                    <a className='mobile-menu-button text-center'><ThemeToggle/></a>
                </div>
            </nav>

            {/* Banner */}
            <div className="banner-wrapper">
                <h1 className="banner-title">Full Stack Developer</h1>
                <p className="banner-text">
                    Formado em Análise e Desenvolvimento de Sistemas e atuando na área de desenvolvimento a mais de 2 anos com participação nos mais variados tipos de projeto como freelances, bolsas e estágios. Atuando em todas as etapas de desenvolvimento do software e focando sempre em entregar o produto proposto da melhor forma possível.
                </p>
            </div>

            {/* About */}
            <div>
                <div className="about">
                    <div className="about-section">
                        <h1 className='about-title'>Sobre mim</h1>
                        <ul className='about-topics'>
                            <li><strong>Nome: </strong>Bruno Perdoná</li>
                            <li><strong>Idade: </strong>22 Anos</li>
                            <li><strong>Endereço: </strong>Canoinhas/SC</li>
                            <li><strong>Formação: </strong>Análise e Desenvolvimento de Sistemas</li>
                            <li><strong>Tempo de Experiência: </strong>2 Anos</li>
                        </ul>
                        <div className='w-auto flex justify-center py-12'>
                            <Button 
                                    name={"Curriculo"} 
                                    icon={<HiOutlineDownload/>}
                                    anchor="../../../curriculum.txt"/>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="about-section">
                        <h1 className='about-title'>Tecnologias</h1>
                        <div>
                            <h2 className='about-subtitle'>Linguagens</h2>
                            <div className='about-chip-layout'>
                                <Chip
                                    title='Kotlin'
                                    icon={<TbBrandKotlin/>}
                                />
                                <Chip
                                    title='Java'
                                    icon={<BiLogoJava/>}
                                />
                                <Chip
                                    title='Python'
                                    icon={<TbBrandPython/>}
                                />
                                <Chip
                                    title='JavaScript'
                                    icon={<TbBrandJavascript/>}
                                />
                                <Chip
                                    title='TypeScript'
                                    icon={<TbBrandTypescript/>}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className='about-subtitle'>Frameworks e Tecnologias</h2>
                            <div className='about-chip-layout'>
                                <Chip
                                    title='Android'
                                    icon={<TbBrandAndroid/>}
                                />
                                <Chip
                                    title='Spring'
                                    icon={<BiLogoSpringBoot/>}
                                />
                                <Chip
                                    title='Django'
                                    icon={<TbBrandDjango/>}
                                />
                                <Chip
                                    title='React'
                                    icon={<TbBrandReact/>}
                                />
                                <Chip
                                    title='Figma'
                                    icon={<TbBrandFigma/>}
                                />
                                <Chip
                                    title='Tailwind'
                                    icon={<TbBrandTailwind/>}
                                />
                                <Chip
                                    title='MySQL'
                                    icon={<TbBrandMysql/>}
                                />
                                <Chip
                                    title='Git'
                                    icon={<TbBrandGit/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-end'>
                    <div className='about-ball'></div>
                </div>
            </div>

            {/* Projects */}
        </div>
    )
}

export default LandingPage;