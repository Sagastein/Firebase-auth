/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useUserStore from "./AuthStore";
import { BeatLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useUserStore();
  if (loading)
    return (
      <main className="flex justify-center items-center h-screen">
        <BeatLoader color="#36d7b7" />
      </main>
    );
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
