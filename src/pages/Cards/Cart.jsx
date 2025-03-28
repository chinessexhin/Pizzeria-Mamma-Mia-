import { pizzaCart } from "../../../data/pizza";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider"; 

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    const { token } = useContext(UserContext);

    const apiUrl = "http://localhost:5000/api/checkouts";

    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.count, 0);
    };

    const restarCantidad = (id) => {
        setCart(cart.map((item) => 
            item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
        ));
    };

    const aumentarCantidad = (id) => {
        setCart(cart.map((item) => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    const handleCheckout = async () => {
        if (!token) {
            alert("Debes iniciar sesión para realizar una compra.");
            return;
        }

        const order = {
            items: cart,
            total: calcularTotal(),
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(order),
            });

            if (!response.ok) {
                throw new Error("Error al procesar la compra");
            }

            const data = await response.json();
            alert("Compra realizada con éxito. Código del pedido: " + data.orderId);
            setCart([]);
        } catch (error) {
            console.error("Error en el checkout:", error);
            alert("Hubo un problema con la compra.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Carrito de compras</h2>
            {cart.map((item) => (
                <div className="card mb-3" key={item.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={item.img}
                                className="img-fluid rounded-start"
                                alt={item.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{item.name}</h5>
                                <p className="card-text">Precio: {item.price}</p>
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn btn-outline-danger" onClick={() => restarCantidad(item.id)}>
                                        -
                                    </button>
                                    <span>{item.count}</span>
                                    <button className="btn btn-outline-success" onClick={() => aumentarCantidad(item.id)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="text-end mt-4">
                <h3>Total: $ {calcularTotal()}</h3>
                <button className="btn btn-primary mt-3" onClick={handleCheckout}>
                    Confirmar Compra
                </button>
            </div>
        </div>
    );
};

export default Cart;
