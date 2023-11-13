import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../Context/Context";

const ProtectedRoute = (props) => {
  // Get the authentication token from local storage
  const authToken = localStorage.getItem("x-Auth-token");

  // Get context data
  const contextData = useContext(Context);

  // Check if the user is logged in
  if (authToken) {
    return <>{props.children}</>;
  } else {
    contextData.setNavFlag(false);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
