import Item from './../Item/Item'


export const ItemList = ({productos}) =>{

    return(
        <div>
            
            <div className='container m-5'>
             {productos.map ((elemento) => <Item key={elemento.id} elem={elemento}/>) }  
                  
            
            </div>
    </div>
    )
}
export default ItemList
