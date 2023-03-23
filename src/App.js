import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Contacto} from './components/contacto/Contacto'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Inicio} from './components/Inicio/Inicio'


function App() {

  return (
    <BrowserRouter>
    <div>
      
    <Navbar/>
    
        <Routes>
        

          <Route path="/" element={<Inicio/>}/>
          <Route path="/menu" element={<ItemListContainer/>} />
          <Route path="/menu/:productoId" element={<ItemListContainer/>} />
          <Route path="/detail" element={<ItemDetailContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/nosotros" element= {<Nosotros/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="contacto" element ={<Contacto/> } />
        </Routes>

    
    

    </div>
    </BrowserRouter>
  );
}

export default App;
