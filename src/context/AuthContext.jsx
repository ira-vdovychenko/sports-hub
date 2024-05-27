import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setAdmin, setRole, setToken, setTokenExpirationTime, setUser } from '../redux/actions/authActions.js';
import { removeToken } from '../services/AuthService.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));
  const [user, setUserState] = useState(JSON.parse(localStorage.getItem('user')));
  const [isAdmin, setIsAdminState] = useState(localStorage.getItem('isAdmin') === 'true');
  const [role, setRoleState] = useState(JSON.parse(localStorage.getItem('role')));

  useEffect(() => {
    const isAdminLocal = localStorage.getItem("isAdmin");
    if (isAdminLocal === "true") {
      dispatch(setAdmin(true));
      setIsAdminState(isAdmin);
    } else if (isAdminLocal === "false") {
      dispatch(setAdmin(false));
      setIsAdminState(false);
    }
  }, [dispatch, isAdmin]);

  const handleLogin = (user, role, isAdmin, accessToken, tokenExpirationTime) => {
    dispatch(setUser(user));
    dispatch(setRole(role));
    dispatch(setAdmin(isAdmin));
    dispatch(setToken(accessToken));
    dispatch(setTokenExpirationTime(tokenExpirationTime));

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("tokenExpirationTime", JSON.stringify(tokenExpirationTime));

    setIsAuthenticated(true);
    setUserState(user);
    setIsAdminState(isAdmin);
    setRoleState(role);
  };
  const toggleMode = (currentIsAdmin) => {
    const newIsAdmin = !currentIsAdmin; 
    
    dispatch(setAdmin(newIsAdmin));
    localStorage.setItem('isAdmin', newIsAdmin); 
    setIsAdminState(newIsAdmin); 
  
    if (newIsAdmin) {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };
  
  const handleLogout = async () => {
    await removeToken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("tokenExpirationTime");

    dispatch(logout());
    setIsAuthenticated(false);
    setUserState(null);
    setIsAdminState(false);
    setRoleState(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isAdmin, role, handleLogin, toggleMode, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
