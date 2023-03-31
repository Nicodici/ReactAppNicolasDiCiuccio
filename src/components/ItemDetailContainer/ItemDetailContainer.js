import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { busquedaporId } from "../../helpers/busquedaporId";
import { ItemDetail } from "../ItemDetail/ItemDetail";
/* import { doc, getDocs } from "firebase/firestore";
 */import { Loader } from "./../Loader/Loader";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const [pantallaCarga, setPantallaCarga] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    busquedaporId(itemId)
      .then((response) => {
        setProductos(response);
      })
      .catch(() => {
        console.log("Promesa Rechazada");
      })

      .finally(() => {
        setPantallaCarga(false);
      });
  }, []);

  return (
    <div className="ContItemDetailContainer">
      {pantallaCarga ? <Loader /> : <ItemDetail productos={productos} />}
    </div>
  );
};

export default ItemDetailContainer;
