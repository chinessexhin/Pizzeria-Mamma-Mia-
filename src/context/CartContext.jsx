import { createContext, useState } from "react";

export const CartContext = createContext();

const PizzaProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addToCart = ({ id, price, name, img }) => {
      const productoEncontrado = carrito.findIndex((p) => p.id === id)

      const producto = {id, price, name, img, count: 1}
      if (productoEncontrado >= 0 ){
          carrito[productoEncontradoIndice].count++
          setCarrito([...carrito])
      } else {
          setCarrito([...carrito, producto])
      }
  }

  const increment = (index) => {
    carrito [index].count++
    setCarrito([...carrito])
}

const decrement = (index) => {
    carrito [index].count--
    setCarrito([...carrito])
}

  const stateGlobal = {
    carrito,
    addToCart,
    increment,
    decrement
  }

return (
    <CartContext.Provider
      value={ stateGlobal }>
      {children}
    </CartContext.Provider>
  )
}

export default PizzaProvider