export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  
export const setRole = (role) => ({
    type: 'SET_ROLE',
    payload: role,
  });
  
export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
  });

export const setAdmin = (isAdmin) => ({
  type: 'SET_ADMIN',
  payload: isAdmin,
});
    
export const logout = () => ({
    type: 'LOGOUT',
  });
  


  