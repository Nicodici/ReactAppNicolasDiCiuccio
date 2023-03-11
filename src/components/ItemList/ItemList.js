import Item from './../Item/Item'


export const ItemList = ({items}) =>{

    return(
        <div>
            
            <div >
             {items.map ((elemento) => <Item key={elemento.id} elem={elemento}/>) }  
                  
            
            </div>
    </div>
    )
}
export default ItemList
