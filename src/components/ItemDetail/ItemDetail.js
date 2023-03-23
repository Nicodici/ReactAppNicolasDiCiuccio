import { Link } from "react-router-dom"
import {ItemCount} from "../ItemCount/ItemCount"
/* import './ItemDetail.css'
 */
export const ItemDetail = ({productos}) => {

    return (
        <div className ="cartaItem">

                <div className="container m-5" >
                    <img src={productos.imgH} alt={productos.nameHamb}/>
                    <h2> {productos.nameHamb}</h2>
                    <p>Cantidad de Hamburguesas: <b>{productos.cantHamb}</b></p>
                    <p>{productos.description}</p>
                    <h5>Precio: ${productos.price}</h5>
                    <ItemCount max={productos.stock}/>
                    <p>Stock disponible: {productos.stock}</p>                    

                    <Link to={"/menu"} className="btn btn-secondary">Volver</Link>
                </div>

        </div>


    )



}

export default ItemDetail