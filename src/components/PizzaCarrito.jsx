import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../contexts/CartContext";
import './main.css'

export default function PizzasCarrito() {
  const { cart, decreaseCount, increaseCount, totalCart } = useContext(Context);

  return (
    <div className="cart-container">
      {cart.map((pizza, index) => (
        <PizzaItem
          key={pizza.id || index}
          pizza={pizza}
          onDecrease={() => decreaseCount(index)}
          onIncrease={() => increaseCount(index)}
        />
      ))}
      <TotalRow total={totalCart} />
      <Button className="checkout-button">Ir a pagar</Button>
    </div>
  );
}

function PizzaItem({ pizza, onDecrease, onIncrease }) {
  return (
    <div className="pizza-item">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <span className="pizza-name">{pizza.name}</span>
      <div className="counter">
        <Button onClick={onDecrease}>-</Button>
        <span className="pizza-count">{pizza.count}</span>
        <Button onClick={onIncrease}>+</Button>
      </div>
    </div>
  );
}

function TotalRow({ total }) {
  return (
    <div className="total-row">
      <span className="total-text">Total:</span>
      <span className="total-amount">{monedaLocal(total)}</span>
    </div>
  );
}
