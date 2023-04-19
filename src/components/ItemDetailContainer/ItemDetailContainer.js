import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "./../Loader/Loader";
import "./ItemDetailContainer.css";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const [pantallaCarga, setPantallaCarga] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const documentRef = doc(db, "productos", itemId);

    getDoc(documentRef)
      .then((doc) => {
        setProductos({
          id: doc.id,
          ...doc.data(),
        });
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
