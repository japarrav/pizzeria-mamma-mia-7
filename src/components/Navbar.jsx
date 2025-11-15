import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { formatPrice } from '../utils/formatPrice';
import './Navbar.css';

const Navbar = () => {
  const { getTotal } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-light me-2" to="/">
                🍕 Home
              </Link>
            </li>
            
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light me-2" onClick={logout}>
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/register">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
            
            <li className="nav-item">
              <Link className="btn btn-outline-warning" to="/cart">
                🛒 Total: ${formatPrice(getTotal())}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
