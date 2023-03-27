import { useEffect, useState } from 'react'
import {ItemList} from './../ItemList/ItemList'
import { cargarMenu } from './../../helpers/cargarMenu'
import { useParams } from 'react-router-dom'

import "./ItemListContainer.css"
import {Loader} from './../Loader/Loader'

export const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [pantallaCarga, setPantallaCarga] = useState(true)
    const {productoId} = useParams()

    useEffect (() => {
        cargarMenu()
        .then( (response)=>{
            if ( !productoId){
                setProductos (response)
            } else {
                setProductos (response.filter((prod) => prod.cantHamb === parseInt(productoId)))
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


        },[productoId]
    ) 
    return (
        <div className="ContenedorLista" >
            <div className='contTitulo'>
            <h1 className='contTitulo__titulo'>Menu de burgers</h1>
            <p className='contTitulo__p'>*Todas nuestras burgers vienen acompañadas de papas.</p>
            </div>
            {
              pantallaCarga 
              ?
              <Loader/> 
              : <ItemList productos={productos} />
            }
        </div>
    )
} 
export default ItemListContainer