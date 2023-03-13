import { Link } from 'react-router-dom'
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
                    <Link to="/" className="navbar__link">Home</Link>
                    <Link to="menu" className="navbar__link">Menu</Link>
                    <Link to="pedidos" className="navbar__link">Pedidos</Link>
                    <Link to="nosotros" className="navbar__link">Nosotros</Link>
                    <Link to="contacto" className="navbar__link">Contacto</Link>

                </nav>
                <CartWidget/>
                </div>
            </div>
        </header>
    )
}

