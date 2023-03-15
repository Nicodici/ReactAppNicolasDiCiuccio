import { Link } from "react-router-dom"

export const ItemDetail = ({item}) => {


    return (
        <div className ="cartaItem">

                <div className="container m-5" >
                    <img src={item.imgH} alt={item.nameHamb}/>
                    <h2> {item.nameHamb}</h2>
                    <p>Cantidad de Hamburguesas: <b>{item.cantHamb}</b></p>
                    <p>{item.description}</p>
                    <h5>Precio: ${item.price}</h5>
                    <Link to={`/detail/${item.id}`} className='btn btn-secondary'>Ver más</Link>
                </div>

        </div>


    )



}

export default ItemDetail