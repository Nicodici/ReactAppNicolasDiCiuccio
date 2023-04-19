import { Link } from 'react-router-dom'



import './Inicio.css'
export const Inicio = () => {



    return (

        <div className="containerIni" >
            <div className='containerIni__cont'>
            <h1 className='containerIni__cont__titulo'> Bienvenidos a Di.Ci. Burguers</h1>
            <p className='containerIni__cont__p'>Las mejores hamburguesas de Villa Devoto. Hechas con AMOR</p>

            <div className='cont__onepage'>
                <Link to="/menu/categoria/:categoryProd" className='container__onepage__options'>Burgers</Link>
                <Link to="/menu/categoria/:categoryProd" className='container__onepage__options'>Minutas</Link>
                <Link to="/menu/categoria/:categoryProd" className='container__onepage__options'>Mas comidas</Link>
                
            </div> 
            </div>
        </div>
    )


}
export default Inicio