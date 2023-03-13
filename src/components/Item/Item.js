import './Item.css'


export const Item = ({elem}) => {


    return (
        <div className ="cartaItem">

                <div className="container m-5" >
                    <img src={elem.imgH} alt={elem.nameHamb}/>
                    <h2> {elem.nameHamb}</h2>
                    <p>Cantidad de Hamburguesas: <b>{elem.cantHamb}</b></p>
                    <p>{elem.description}</p>
                    <h5>Precio: ${elem.price}</h5>

                    <button className='btn btn-secondary'>Ver más</button>
                </div>

        </div>


    )



}

export default Item