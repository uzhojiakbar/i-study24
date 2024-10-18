import { Navigate } from "react-router-dom";
import { getCookie } from "../../../Hooks/cookieHook";

const NotAuth = ({ children }) => {
  const token = getCookie("access");
  const login = getCookie("login");

  if (login && token && token.length) {
    return <Navigate to={`/profile`} />;
  }
  return children;
};

export default NotAuth;
