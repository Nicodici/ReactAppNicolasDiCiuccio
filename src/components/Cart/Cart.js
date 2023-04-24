import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import { sweetVaciar } from "../../helpers/sweetVaciar";

export const Cart = () => {
  const { cart, VaciarCarrito, EliminarItemCarro } = useContext(CartContext);


  const vaciarCart = () => {
    VaciarCarrito();
    sweetVaciar();
  };

  if (cart.length === 0) {
    return (
      <div className="container m-5">
        <h1 className="container m-5 text-center">
          No tienes productos agregados
        </h1>
        <Link className="btn btn-success container m-5" to="/menu">
          Ir al menu de compras
        </Link>
      </div>
    );
  }

  return (
    <div className="container cont__total__cart">
      <h1 className="cont_total__titu">Resumen de compra</h1>
      <hr />

      {cart.map((producto) => (
        <div className="cont__item" key={producto.id}>
          <div className="cont__item__img">
            <img
              className="item__img"
              alt={producto.nameHamb}
              src={producto.imgH}
            ></img>
          </div>
          <div className="item__detail">
            <h4>{producto.nameHamb}</h4>
            <p>{producto.description}</p>
            <p>Precio unitario: ${producto.price}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio SubTotal: ${producto.price * producto.cantidad}</p>
          </div>

          <div className="cont__eliminar">
            <button
              className="btn btn-danger"
              onClick={() => EliminarItemCarro(producto.id)}
            >
              Eliminar producto
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-danger m-5" onClick={vaciarCart}>
        Vaciar carro de compras
      </button>
      <Link className="btn btn-success" to="/checkout">
        Terminar mi compra
      </Link>
    </div>
  );
};
export default Cart;
