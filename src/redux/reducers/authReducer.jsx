const initialState = {
  user: null,
  role: null,
  token: null,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log('SET_USER:', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ROLE':
      return {
        ...state,
        role: action.payload,
      };
    case 'SET_TOKEN':
      console.log('SET_TOKEN:', action.payload);

      return {
        ...state,
        token: action.payload,
      };
    case 'SET_ADMIN':
      return {
        ...state,
        isAdmin: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;


