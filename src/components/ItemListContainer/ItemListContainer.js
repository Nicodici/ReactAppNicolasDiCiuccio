import { useEffect, useState } from 'react'
import {ItemList} from './../ItemList/ItemList'
import { cargarMenu } from './../../helpers/cargarMenu'
import { useParams } from 'react-router-dom'



export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [pantallaCarga, setPantallaCarga] = useState(true)
    
    const {cantburgers} = useParams()

    useEffect (() => {
        cargarMenu()
        .then( (response)=>{
            if ( !cantburgers){
                setProductos (response)
            } else {
                setProductos (response.filter((prod) => prod.cantHamb === parseInt(cantburgers)))
                console.log ('entro aca')
            }
        }

        )
        .catch( ()=>{
          console.log ("Promesa Rechazada")
        })

        .finally( ()=>{
            setPantallaCarga(false)
        }
        )

        },[cantburgers]
    )
    return (
        <div className="ContenedorLista" >
            
            <h1 className='m-5'>Este es nuestro menu</h1>
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