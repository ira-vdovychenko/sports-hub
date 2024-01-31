import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as AuthService from '../services/AuthService';
import { setUser, setToken, logout } from '../redux/actions/authActions';

const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUserState] = useState(null);
  const [token, setTokenState] = useState(null);

  const checkToken = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      console.log('Stored Token:', storedToken);

      if (storedToken) {
        const user = await AuthService.authenticateUserWithToken(storedToken);
        console.log('User:', user);
        dispatch(setUser(user));
        dispatch(setToken(storedToken));

        setUserState(user);
        setTokenState(storedToken);

      }
    } catch (error) {
      console.error('Error checking token:', error.message);
      dispatch(logout());
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    checkToken();
  }, [dispatch]);

  return {
    user,
    token,
    checkToken,
  };
};

export default useAuth;


