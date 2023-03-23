import Item from './../Item/Item'
import "./ItemList.css"

export const ItemList = ({productos}) =>{

    return(
        <div className='container__menu__items'>    
             {productos.map ((elemento) => <Item key={elemento.id} elem={elemento}/>) }     
    </div>
    )
}
export default ItemList
