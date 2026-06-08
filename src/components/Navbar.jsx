import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const { total } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand fw-bold text-decoration-none">
        Pizzería Mamma Mia!
      </Link>

      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-sm btn-secondary">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-sm btn-secondary">
              🔓 Profile
            </Link>
            <button className="btn btn-sm btn-secondary">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-secondary">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-secondary">
              🔐 Register
            </Link>
          </>
        )}

        <Link to="/cart" className="btn btn-sm btn-warning">
          🛒 Total: ${formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
