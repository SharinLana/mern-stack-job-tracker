import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Loader from "./sharedComponents/Loader";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
