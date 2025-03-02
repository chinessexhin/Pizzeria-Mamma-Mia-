import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cart from './pages/Cards/Cart'
import Login from './pages/Login/Login'
import Registro from './pages/Register/Registro'
import NotFound from './pages/Notfound/Notfound'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
  <>
   <Navbar />

    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/register' element= {<Registro />} />
      <Route path='/cart' element= {<Cart />} />
      {/* <Route path='/pizza/p001' element= {<Pizza />} /> */}
      {/* <Route path='/profile' element= {<Profile />} /> */}
      <Route path='/404' element= {<NotFound />} />
    </Routes>

    <Home />

   <Footer />
  </>
  )
}

export default App
