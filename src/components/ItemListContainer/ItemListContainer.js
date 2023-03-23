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

        /*  const productosRef = collection(db, "productos")
        
        getDocs(productosRef)
            .then ((resp) =>{
                console.log(resp.docs.map ((doc) =>{
                    return {...doc.data(), id: doc.id}
                })
                )}
            ) */
        },[productoId]
    ) 
    return (
        <div className="ContenedorLista" >
            <div className='containerTitulo'>
            <h1 className='containerTitulo__titulo'>Este es nuestro menu</h1>
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