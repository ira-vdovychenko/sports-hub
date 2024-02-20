const initialState = {
  user: null,
  role: null,
  token: null,
  tokenExpirationTime: null,
  isAdmin: false,
  isPasswordChangeSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
        tokenExpirationTime: action.payload.exp,
      };
    case "SET_TOKEN_EXPIRATION_TIME":
      return {
        ...state,
        tokenExpirationTime: action.payload,
      };
    case "SET_ADMIN":
      return {
        ...state,
        isAdmin: action.payload,
      };
    case "SET_PASSWORD_CHANGE_SUCCESS":
      return {
        ...state,
        isPasswordChangeSuccess: action.payload,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
