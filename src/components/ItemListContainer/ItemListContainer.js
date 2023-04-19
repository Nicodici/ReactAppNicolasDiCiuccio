import { useEffect, useState } from "react";
import { ItemList } from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Loader } from "./../Loader/Loader";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./../../firebase/config";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [pantallaCarga, setPantallaCarga] = useState(true);
    const {categoryProd} = useParams()

    console.log (useParams())

  useEffect(() => {
    setPantallaCarga(true);

    const productosRef = collection(db, "productos");
    const q = categoryProd
                ?  query(productosRef, where("category", "==", categoryProd))
                : productosRef
    
    
    getDocs(productosRef)
      .then((resp) => {
        const docs = resp.docs.map((doc) => {
          return {...doc.data(), id: doc.id};
        });
        setProductos(docs);
      })

      .finally(() => {
        setPantallaCarga(false);
      });
  }, []);

  return (
    <div className="ContenedorLista">
      <div className="contTitulo">
        <h1 className="contTitulo__titulo">Menu de burgers</h1>
        <p className="contTitulo__p">
          *Todas nuestras burgers vienen acompañadas de papas.
        </p>
      </div>
      {pantallaCarga ? <Loader /> : <ItemList productos={productos} />}
    </div>
  );
};
export default ItemListContainer;
