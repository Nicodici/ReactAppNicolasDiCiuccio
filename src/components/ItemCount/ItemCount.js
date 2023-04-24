import "./ItemCount.css";
import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";
import {mostrarSweetAlert} from "../../helpers/sweetAgregar"

export const ItemCount = ({ item, cantidad, setCantidad }) => {
 
 const {AgregarAlCarrito} = useContext(CartContext)
 
 
  const sumarItem = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const restarItem = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const AgregarItem = () => {
   
    let  itemToCart = {
      ...item,
      cantidad
    }
    
    AgregarAlCarrito (itemToCart )
  
  };

  const dosFunciones = () => {
    AgregarItem()
    mostrarSweetAlert()
  };


  return (
    <div className="m-2">
      <button onClick={restarItem} className="btn btn-outline-primary m-2">
        -
      </button>
      <span className="m-1 span__cont">{cantidad}</span>
      <button onClick={sumarItem} className="btn btn-outline-primary m-2">
        +
      </button>
      <button onClick={dosFunciones}  className="btn btn-primary">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
