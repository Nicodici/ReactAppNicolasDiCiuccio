import { createContext, useState } from "react";

export const CartContext = createContext() 

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const AgregarAlCarrito = (Item) =>{
  setCart([...cart,Item])
  console.log(cart)
}

const CantCarrito = () => {
  return cart.reduce ((acum, prod) => acum + prod.cantidad, 0)
}


    return (
        <CartContext.Provider value={{
            cart,
            AgregarAlCarrito,
            CantCarrito
          }}>
            {children}
        </CartContext.Provider>
    )

}