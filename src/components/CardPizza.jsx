import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';
import './CardPizza.css';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, img });
  };

  return (
    <div className="card pizza-card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        
        <div className="ingredients-section">
          <p className="ingredients-label">Ingredientes:</p>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>🔸 {ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="price-section">
          <h6 className="price">Precio: ${formatPrice(price)}</h6>
        </div>
        
        <div className="button-group">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">
            Ver Más 👀
          </Link>
          <button 
            className="btn btn-dark btn-sm"
            onClick={handleAddToCart}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
