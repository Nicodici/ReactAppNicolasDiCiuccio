import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  ;

  return (
    <div className="container cont__total__cart">
      <h1 className="cont_total__titu">Resumen de compra</h1>
      <hr />

      {cart.map((producto) => (
        <div className="cont__item" key={producto.id}>
          <div className="cont__item__img">
          <img className="item__img"  alt={producto.nameHamb} src={producto.imgH}></img>
          </div>
          <div className="item__detail">

          <h4>{producto.nameHamb}</h4>
          <p>{producto.description}</p>
          <p>Precio unitario: ${producto.price}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio SubTotal: ${producto.price*producto.cantidad}</p>
          </div>

        <div  className="cont__eliminar">
        <button className="btn btn-danger">Eliminar producto</button>
        </div>

        </div>
      ))}
      </div>
  );
  }
export default Cart;
