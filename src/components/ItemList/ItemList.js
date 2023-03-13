import Item from './../Item/Item'


export const ItemList = ({items}) =>{

    return(
        <div>
            
            <div className='container m-5'>
             {items.map ((elemento) => <Item key={elemento.id} elem={elemento}/>) }  
                  
            
            </div>
    </div>
    )
}
export default ItemList
