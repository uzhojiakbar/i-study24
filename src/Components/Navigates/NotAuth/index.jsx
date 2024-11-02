import { Navigate } from "react-router-dom";
import { getCookie } from "../../../Hooks/cookieHook";

const NotAuth = ({ children, profile = 1 }) => {
  const token = getCookie("access");
  const login = getCookie("login");

  if (profile) {
    if (login && token && token.length) {
      return <Navigate to={`/profile`} />;
    }
    return children;
  } else {
    if (login && token && token.length) {
      return children;
    }
    return <Navigate to={`/`} />;
  }
};

export default NotAuth;
