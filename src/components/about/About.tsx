import { TbBrandKotlin } from 'react-icons/tb'
import { BiLogoJava } from 'react-icons/bi'
import { TbBrandPython } from 'react-icons/tb'
import { HiOutlineDownload } from 'react-icons/hi'
import { TbBrandJavascript } from 'react-icons/tb'
import { TbBrandTypescript } from 'react-icons/tb'
import { TbBrandAndroid } from 'react-icons/tb'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { TbBrandDjango } from 'react-icons/tb'
import { TbBrandReact } from 'react-icons/tb'
import { TbBrandFigma } from 'react-icons/tb'
import { TbBrandMysql } from 'react-icons/tb'
import { TbBrandGit } from 'react-icons/tb'
import { TbBrandTailwind } from 'react-icons/tb'

import NavButton from '../nav/NavButton'
import './index.css'
import Chip from './Chip'

export default function About(){
    return (
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
                        <NavButton 
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
                        <div className='about-chip-grid'>
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
                        <div className='about-chip-grid'>
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
    )
        
}