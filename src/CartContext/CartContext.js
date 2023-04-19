import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AgregarAlCarrito = (Item) => {
    setCart([...cart, Item]);
    console.log(cart);
  };

  const CantCarrito = () => {
    return cart.reduce((acum, prod) => acum + prod.cantidad, 0);
  };

  const VaciarCarrito = () => {
    setCart([]);
  };

  const EliminarItemCarro = (id) =>{
    setCart ( cart.filter ((prod) => prod.id !== id ) )

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AgregarAlCarrito,
        CantCarrito,
        VaciarCarrito,
        EliminarItemCarro
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
