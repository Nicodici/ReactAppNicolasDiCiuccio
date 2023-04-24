import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({elem}) => {


    return (
        <div className ="cont__total">

                <div className="cont__item" >
                    <img className="img_menu" src={elem.imgH} alt={elem.nameHamb}/>
                    <h1 className='cont__item__element'> {elem.nameHamb}</h1>
                    <p className='cont__item__element'>Cantidad de Hamburguesas: <b>{elem.cantHamb}</b></p>
                    <p className='cont__item__element'>{elem.description}</p>
                    <h5 className='cont__item__element'>Precio: ${elem.price}</h5>
                    <Link to={`/detail/${elem.id}`} className='btn btn-secondary'>Ver detalle</Link>
                </div>

        </div>


    )



}

export default Item