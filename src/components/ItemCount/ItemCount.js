import { useState } from "react";

export const ItemCount = ({ max }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="m-2">
      <button onClick={handleRestar} className="btn btn-outline-primary m-2">
        -
      </button>
      <span className="m-1">{cantidad}</span>
      <button onClick={handleSumar} className="btn btn-outline-primary m-2">
        +
      </button>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
