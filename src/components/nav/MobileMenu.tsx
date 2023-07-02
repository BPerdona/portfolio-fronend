import NavThemeToggle from './NavThemeToggle'

export default function MobileMenu(){
    return(
        <div className="mobile-menu hidden">
            <a href="#" className="mobile-menu-button">Início</a>
            <a href="#" className="mobile-menu-button">Projetos</a>
            <a href="#" className="mobile-menu-button">Contato</a>
            <a href="#" className="mobile-menu-button">Curriculo</a>
            <a href="#" className="mobile-menu-button">Playground</a>
            <a className='mobile-menu-button text-center'>
                <NavThemeToggle/>
            </a>
        </div>
    )
}