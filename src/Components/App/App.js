import {Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from '../Footer/footer';
import Navbar from '../NavBar/Navbar'
import Home from '../pages/Home';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ItemDetailContainer from '../ItemDetail/ItemDetail'

function App() {
  return (
    <div >
         <Navbar />
         <Routes>
          <Route path='/tienda' element={ <Products/>}> </Route>
          <Route path='/nosotros' element={ <Home/>}> </Route>
          <Route path='/contactos' element={ <Home/>}> </Route>
           <Route  path="items/:idItems" element={<ItemDetailContainer />} />
          <Route path='*' element={ <NotFound/>}> </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
