import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        
        if (!response.ok) {
          throw new Error('Pizza no encontrada');
        }
        
        const data = await response.json();
        setPizza(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error al obtener la pizza:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando pizza...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          No se encontró la pizza
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>{pizza.name}</h1>
          <hr />
          <p className="lead">{pizza.desc}</p>
          <hr />
          <h4>Ingredientes:</h4>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                🔸 {ingredient}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0">Precio: ${formatPrice(pizza.price)}</h3>
            <button className="btn btn-dark btn-lg">Añadir al carrito 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
