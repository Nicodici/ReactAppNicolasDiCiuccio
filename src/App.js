import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/contacto/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Inicio } from "./components/Inicio/Inicio";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./CartContext/CartContext";
import {Checkout} from "./components/Checkout/Checkout"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<ItemListContainer />} />
          <Route path="/menu/:productoId" element={<ItemListContainer />} />
          <Route path="/menu/categoria/:category" element={<ItemListContainer/>} />
          <Route path="/detail" element={<ItemDetailContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrodecompras" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
