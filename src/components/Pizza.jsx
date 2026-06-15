import { useState, useEffect } from "react";
import { formatPrice } from "../utils/formatPrice";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <img
              src={pizza.img}
              className="card-img-top"
              alt={pizza.name}
              style={{ height: "350px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Pizza {pizza.name}</h2>

              <p className="text-muted">{pizza.desc}</p>

              <hr />

              <p className="fw-bold mb-1">🍕 Ingredientes:</p>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">
                  Precio: ${formatPrice(pizza.price)}
                </h4>
                <button className="btn btn-danger">🛒 Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
