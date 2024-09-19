import React, { createContext, useState } from 'react';
// import { AuthContext, AuthProvider } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    // Simulated login (you can replace this with real authentication)
    if (email === 'test@example.com' && password === 'password') {
      setUser({ email });
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  const register = (email, password) => {
    // Simulated registration
    setUser({ email });
    alert('Registration successful!');
    navigate('/home');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
