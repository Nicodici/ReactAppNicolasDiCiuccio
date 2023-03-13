import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Nosotros} from './components/Nosotros/Nosotros';
import {Contacto} from './components/contacto/Contacto'




function App() {

  return (
    <BrowserRouter>
    <div>
      
    <Navbar/>
    
        <Routes>
        
          <Route path="/" element={ <ItemListContainer/>}/>
          <Route path="/menu" element={<ItemListContainer/>} />

          <Route path="/menu/:cantburgers" element={<ItemListContainer/>} />
          <Route path="/nosotros" element= {<Nosotros/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
          <Route path="contacto" element ={<Contacto/> } />
        </Routes>

    
    

    </div>
    </BrowserRouter>
  );
}

export default App;
