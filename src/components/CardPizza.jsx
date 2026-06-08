import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">Pizza {name}</h5>
        <hr />

        <p className="text-muted small mb-1">🍕 Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <hr />
        <p className="fw-bold text-center">Precio: ${formatPrice(price)}</p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-secondary">Ver Más 👀</button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => addToCart({ id, name, price, ingredients, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
