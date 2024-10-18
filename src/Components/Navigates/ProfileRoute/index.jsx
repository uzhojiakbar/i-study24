import { Navigate } from "react-router-dom";
import { getCookie } from "../../../Hooks/cookieHook";

const UserRoute = ({ children }) => {
  const token = getCookie("access");
  const login = getCookie("login");

  if (token && token.length && login) {
    return <Navigate to={`/profile`} />;
  }
  return children;
};

export default UserRoute;
