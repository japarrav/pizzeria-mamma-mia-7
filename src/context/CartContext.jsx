// src/context/CartContext.jsx
import { createContext, useState } from 'react';
import { initialCart } from '../data/pizzas';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  // Función para agregar un producto al carrito
  const addToCart = (pizza) => {
    const existingItem = cart.find(item => item.id === pizza.id);
    
    if (existingItem) {
      // Si ya existe, incrementar la cantidad
      setCart(cart.map(item =>
        item.id === pizza.id 
          ? { ...item, count: item.count + 1 }
          : item
      ));
    } else {
      // Si no existe, agregarlo con count: 1
      setCart([...cart, { 
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1
      }]);
    }
  };

  // Función para incrementar la cantidad de un producto
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  // Función para decrementar la cantidad de un producto
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0));
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.count), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}