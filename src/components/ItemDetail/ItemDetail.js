import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ productos }) => {
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
            {" "}
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
          <ItemCount max={productos.stock} />
          <p className="cont_totalDetail__item__element">
            Stock disponible: {productos.stock}
          </p>
        </div>
      <Link to={"/menu"} className="btn btn-secondary">
        Volver
      </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
