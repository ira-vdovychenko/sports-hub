import { refreshToken } from "../../services/AuthService";
import { setToken, setTokenExpirationTime, logout } from "../actions/authActions";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

let refreshingToken = false; 

export const authMiddleware = (store) => (next) => (action) => {
  const token = store.getState().auth.token;

  if (!token) {
    return next(action);
  }

  const tokenTime = jwtDecode(token);
  const tokenExpirationTime = moment.unix(tokenTime.exp);
  const currentTime = moment();

  if (tokenExpirationTime.diff(currentTime, "seconds") < 10 && !refreshingToken) {
    refreshingToken = true; 

    refreshToken()
      .then((newToken) => {
        store.dispatch(setToken(newToken));
        localStorage.setItem("accessToken", newToken);

        const decodedToken = jwtDecode(newToken);
        const expirationTime = decodedToken.exp;
        store.dispatch(setTokenExpirationTime(expirationTime));
        localStorage.setItem("tokenExpirationTime", expirationTime);

        refreshingToken = false; 
      })
      .catch((error) => {
        console.error("Error refreshing token:", error);
        store.dispatch(logout());
        localStorage.removeItem("tokenExpirationTime");
        localStorage.removeItem("accessToken");
     
        refreshingToken = false; 
      });
  }

  return next(action);
};
