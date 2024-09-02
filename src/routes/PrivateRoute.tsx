import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loading, setUser } = useOutletContext<any>();
  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Outlet
      context={{
        user,
        loading,
        setUser,
      }}
    />
  );
};
export default PrivateRoute;
