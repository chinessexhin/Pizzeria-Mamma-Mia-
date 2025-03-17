import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../context/CartContext';
import PizzasCarrito from '../components/PizzasCarrito';

export default function Carrito() {
  const { Cart } = useContext(Context);

  return (
    <Container className="Carrito p-0 mt-3">
      <h1 className="fs-4">Pedido</h1>
      {cart.length === 0 ? (
        <p>Todavia no añades pizzas😔</p>
      ) : (
        <PizzasCarrito />
      )}
    </Container>
  );
}
