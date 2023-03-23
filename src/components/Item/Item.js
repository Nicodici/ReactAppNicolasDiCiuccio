import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({elem}) => {


    return (
        <div className ="cartaItem">

                <div className="cartaItem__producto" >
                    <img src={elem.imgH} alt={elem.nameHamb}/>
                    <h2> {elem.nameHamb}</h2>
                    <p>Cantidad de Hamburguesas: <b>{elem.cantHamb}</b></p>
                    <p>{elem.description}</p>
                    <h5>Precio: ${elem.price}</h5>
                    <Link to={`/detail/${elem.id}`} className='btn btn-secondary'>Ver más</Link>
                </div>

        </div>


    )



}

export default Item