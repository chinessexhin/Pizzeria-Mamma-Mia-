import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cart from './pages/Cards/Cart'
import Login from './pages/Login/Login'
import Registro from './pages/Register/Registro'
import NotFound from './pages/Notfound/Notfound'


const App = () => {
  return (
   <CartProvider>
     <BrowserRouter>
      <Navbar />

       <Routes>
         <Route path='/' element= {<Home />} />
         <Route path='/login' element= {<Login />} />
         <Route path='/register' element= {<Registro />} />
         <Route path='/cart' element= {<Cart />} />
         <Route path='/404' element= {<NotFound />} />
       </Routes>

        <Home />

       <Footer />
    </BrowserRouter>
  <CartProvider/>
  );
}

export default App
