import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { busquedaporId } from "../../helpers/busquedaporId"
import {ItemDetail} from "../ItemDetail/ItemDetail"

export const ItemDetails = () =>{

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState (false)
    const {itemId} = useParams()
   
   
    useEffect (()=>{
        setLoading(true)

        busquedaporId( Number(itemId) )
        .then ((resp) =>{
            setItem (resp)
            console.log (resp)
        })
        .finally (() => {
            setLoading (true)
        })

    },[])   
    
    return (
        <div>
            {
            loading
            ? <h2>Cargando..</h2> 
            :<ItemDetail  item={item} />
        }
        </div>
        
    )

    
}

export default ItemDetails