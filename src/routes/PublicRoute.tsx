import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthProvider";

export const PublicRoute = () => {
  const { user, loading, token } = useContext(AuthContext);

  if (loading) {
    return <div>loading...</div>;
  }
  if (user && token) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};
