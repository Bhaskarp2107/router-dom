import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Get user from localStorage on first load
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (username) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('authUser', JSON.stringify(existingUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  const register = (name, username, password) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const existingUser = users.find((u) => u.username === username);
    if (!existingUser) {
      const newUser = { name, username, password };
      users.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      setUser(newUser);
      localStorage.setItem('authUser', JSON.stringify(newUser));
      return { success: true };
    } else {
      return { success: false, message: 'Username already exists' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
