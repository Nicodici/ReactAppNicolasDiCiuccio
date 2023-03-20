import { Link } from "react-router-dom"

export const ItemDetail = ({productos}) => {


    return (
        <div className ="cartaItem">

                <div className="container m-5" >
                    <img src={productos.imgH} alt={productos.nameHamb}/>
                    <h2> {productos.nameHamb}</h2>
                    <p>Cantidad de Hamburguesas: <b>{productos.cantHamb}</b></p>
                    <p>{productos.description}</p>
                    <h5>Precio: ${productos.price}</h5>
                    <Link to={`/detail/${productos.id}`} className='btn btn-secondary'>Ver más</Link>
                </div>

        </div>


    )



}

export default ItemDetail