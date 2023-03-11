import { useEffect, useState } from 'react'
import {ItemList} from './../ItemList/ItemList'
import { cargarMenu } from './../../helpers/cargarMenu'

export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    let [pantallaCarga, setPantallaCarga] = useState(true)
   
    useEffect (() => {
        cargarMenu()
        .then( (response)=>{
            setProductos (response)
            console.log ('Promesa resuelta')
        }

        )
        .catch( ()=>{
          console.log ("Promesa Rechazada")
        })

        .finally( ()=>{
            setPantallaCarga(false)
        }
        )

        },[]
    )
    return (
        <div className="ContenedorLista" >
            
            <h1>Este es nuestro menu</h1>
            {
              pantallaCarga 
              ?
              <h2>Cargando..</h2> 
              : <ItemList items={productos} />
            }
        </div>
    )
} 
export default ItemListContainer