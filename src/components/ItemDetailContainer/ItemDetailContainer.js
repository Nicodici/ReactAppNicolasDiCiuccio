import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { busquedaporId } from "../../helpers/busquedaporId"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import {doc,getDocs} from "firebase/firestore"

export const ItemDetailContainer = () =>{

    const [productos, setProductos] = useState (null)
    const [pantallaCarga, setPantallaCarga] = useState (true)
    const {itemId} = useParams()
   
   
    useEffect (()=>{

        busquedaporId(itemId)
        .then( (response)=>{
        setProductos (response)

        }

        )
        .catch( ()=>{
            console.log ("Promesa Rechazada")
          })
  
          .finally( ()=>{
              setPantallaCarga(false)
          }
          )

    },[])   
    
    return (
        <div>
            {
            pantallaCarga
            ? <h2>Cargando..</h2> 
            :<ItemDetail  productos={productos} />
        }
        </div>
        
    )

    
}

export default ItemDetailContainer