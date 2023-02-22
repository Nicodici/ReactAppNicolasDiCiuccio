import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.css'

export const Navbar = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <div className='header__container__logoTitu'>
                    <img className='header__logo' src='./img/pngtree-hand-drawn-vector-burger-logo-on-black-background-png-image_4821820.png' alt="Logo de la Empresa" />
                <h1 className="header__titu">DiCi-Burgers</h1>
                </div>
                <div className='Contenedor__nav'>

                <nav className="navbar">
                    <a href="#" className="navbar__link">Home</a>
                    <a href="#" className="navbar__link">Menu</a>
                    <a href="#" className="navbar__link">Pedidos</a>
                    <a href="#" className="navbar__link">Nosotros</a>
                    <a href="#" className="navbar__link">Contacto</a>

                </nav>
                <CartWidget/>
                </div>
            </div>
        </header>
    )
}

