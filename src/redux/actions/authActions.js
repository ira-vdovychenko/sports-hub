export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setRole = (role) => ({
  type: "SET_ROLE",
  payload: role,
});

export const setToken = (accessToken) => ({
  type: "SET_TOKEN",
  payload: accessToken,
});

export const setTokenExpirationTime = (expirationTime) => ({
  type: "SET_TOKEN_EXPIRATION_TIME",
  payload: expirationTime,
});

export const setAdmin = (isAdmin) => ({
  type: "SET_ADMIN",
  payload: isAdmin,
});

export const setPasswordChangeSuccess = (isSuccess) => ({
  type: 'SET_PASSWORD_CHANGE_SUCCESS',
  payload: isSuccess,
});

export const logout = () => ({
  type: "LOGOUT",
});
