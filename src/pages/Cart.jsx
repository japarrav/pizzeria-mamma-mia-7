import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!token) {
      setErrorMessage('Debes iniciar sesión para realizar la compra');
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('¡Compra realizada con éxito! 🎉🍕');
        setErrorMessage('');
      } else {
        setErrorMessage(data.error || 'Error al procesar la compra');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error en checkout:', error);
      setErrorMessage('Error de conexión al procesar la compra');
      setSuccessMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      
      {successMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {successMessage}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSuccessMessage('')}
            aria-label="Close"
          ></button>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {errorMessage}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setErrorMessage('')}
            aria-label="Close"
          ></button>
        </div>
      )}
      
      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-10">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Precio: ${formatPrice(item.price)}</p>
                      <p className="card-text">Subtotal: ${formatPrice(item.price * item.count)}</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <button 
                        className="btn btn-danger" 
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="fs-5">{item.count}</span>
                      <button 
                        className="btn btn-success" 
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="card bg-dark text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h3>Total: ${formatPrice(getTotal())}</h3>
                <button 
                  className="btn btn-success btn-lg" 
                  disabled={!token || loading}
                  onClick={handleCheckout}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Procesando...
                    </>
                  ) : (
                    'Pagar'
                  )}
                </button>
              </div>
              {!token && (
                <p className="text-warning mt-2 mb-0">
                  Debes iniciar sesión para realizar la compra
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
