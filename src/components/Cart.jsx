import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container my-4" style={{ maxWidth: "600px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <span className="fw-semibold">{pizza.name}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span>${formatPrice(pizza.price)}</span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDecrease(pizza.id)}
              >
                -
              </button>
              <span className="fw-bold">{pizza.count}</span>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => handleIncrease(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <hr />
      <h4 className="my-4">Total: ${formatPrice(total)}</h4>

      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;
