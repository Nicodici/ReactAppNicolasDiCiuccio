import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <div>
      
    <Navbar/>
    
    <ItemListContainer greeting="Esto es un mensaje"/>
    
    </div>
  );
}

export default App;
