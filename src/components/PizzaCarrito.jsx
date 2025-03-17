rt { Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../contexts/CartContext';

export default function PizzasCarrito() {
  const { cart, decreaseCount, increaseCount, totalCart } =
    useContext(Context);

  return (
    <>
      <Table responsive>
        <tbody>
          {cart.map((pizza, index) => (
            <tr key={index}>
              <td>
                <img src={pizza.img} alt={pizza.name} />
              </td>
              <td className="w-75 text-capitalize">{pizza.name}</td>
              <td>
                <Button onClick={() => decreaseCount(index)}>-</Button>
              </td>
              <td>{pizza.count}</td>
              <td>
                <Button onClick={() => increaseCount(index)}>+</Button>
              </td>
              <td>=</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end fw-bold">
              Total
            </td>
            <td>=</td>
          </tr>
        </tfoot>
      </Table>
      <Button className="float-end">Ir a pagar</Button>
    </>
  );
}
