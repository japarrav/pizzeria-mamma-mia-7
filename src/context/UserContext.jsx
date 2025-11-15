import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Método para login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Error al iniciar sesión' };
      }
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Método para register
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Error al registrarse' };
      }
    } catch (error) {
      console.error('Error en register:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Método para logout
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // Método para obtener perfil del usuario
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        return { success: true, email: data.email };
      } else {
        return { success: false, error: data.error || 'Error al obtener perfil' };
      }
    } catch (error) {
      console.error('Error al obtener perfil:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  return (
    <UserContext.Provider value={{ 
      token, 
      email, 
      login, 
      register, 
      logout, 
      getProfile 
    }}>
      {children}
    </UserContext.Provider>
  );
};
