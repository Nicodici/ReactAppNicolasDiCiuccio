import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";



export const ItemDetail = ({ productos }) => {

  
  const [cantidad, setCantidad] = useState(1);


  const navigate = useNavigate()

  const handleVolver =() => {
    navigate (-1)
  }

  
  return (
    <div className="cont__totalDetail">
      <div className="cont__totalDetail__item">
        <div className="cont_totalDetail__img">
          <img
            className="cont_totalDetail__item__element"
            src={productos.imgH}
            alt={productos.nameHamb}
            />
        </div>
        <div className="cont__totalDetail__description">
          <h1 className="cont_totalDetail__item__element">
           
            {productos.nameHamb}
          </h1>
          <p className="cont_totalDetail__item__element">
            Cantidad de Hamburguesas: <b>{productos.cantHamb}</b>
          </p>
          <p className="cont_totalDetail__item__element">
            {productos.description}
          </p>
          <h5 className="cont_totalDetail__item__element">
            Precio: ${productos.price}
          </h5>
          <ItemCount 
          item={productos}
          cantidad={cantidad}
          setCantidad={setCantidad}
          />
          <p className="cont_totalDetail__item__element">
            Stock disponible: {productos.stock}
          </p>
        </div>
      <button onClick={handleVolver} className="btn btn-primary">Volver atrás</button>
      </div>
    </div>
  )
  
}
  
export default ItemDetail;
