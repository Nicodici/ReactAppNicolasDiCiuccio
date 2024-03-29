import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'

export const Navbar = () =>{

    const {CantCarrito} = useContext (CartContext) 

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
                    <Link to="/menu" className="navbar__link">Menu completo</Link>
                    <Link to="/nosotros" className="navbar__link">Nosotros</Link>
                    <Link to="/contacto" className="navbar__link">Contacto</Link>
                    <Link to="/carrodecompras" className='navbar__link'>
                    <div className='cont__carrito'>
                        <div className='cont__carrito__span'>{CantCarrito()}</div>
                        <img className='cont__carrito__icono' src="./../img/carritocompras.jpg" alt="carrito de compras"/>
                    </div>
                    </Link>
                </nav>
                </div>
            </div>
        </header>
    )
}

