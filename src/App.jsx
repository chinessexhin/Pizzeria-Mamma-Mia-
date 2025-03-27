import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registro />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

