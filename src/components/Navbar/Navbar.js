import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.css'

export const Navbar = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <div className='header__container__logoTitu'>
                    <Link to="/">
                    <img className='header__logo' src='./../img/pngtree-hand-drawn-vector-burger-logo-on-black-background-png-image_4821820.png' alt="Logo de la Empresa" />
                    </Link>
                        
                <h1 className="header__titu">DiCi-Burgers</h1>
                </div>
                <div className='Contenedor__nav'>

                <nav className="navbar">
                    <Link to="/" className="navbar__link">Home</Link>
                    <Link to="/menu" className="navbar__link">Menu</Link>
                    <Link to="/pedidos" className="navbar__link">Pedidos</Link>
                    <Link to="/nosotros" className="navbar__link">Nosotros</Link>
                    <Link to="/contacto" className="navbar__link">Contacto</Link>
                    <Link to="/carritodecompras" className='navbar__link'>
                    <div className='cont__carrito'>
                        <span></span>
                        <img className='cont__carrito__icono' src="./../img/carritocompras.jpg"/>
                    </div>
                    </Link>
                </nav>
                </div>
            </div>
        </header>
    )
}

