import { createContext, useContext, useMemo, useState } from 'react';
import { getStoredUser, loginUser, logoutUser, registerUser } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  const login = (email, password) => {
    const result = loginUser(email, password);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const register = (formData) => {
    const result = registerUser(formData);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, register, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
