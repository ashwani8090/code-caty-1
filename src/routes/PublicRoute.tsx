import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const PublicRoute = () => {
  const { user, loading, setUser } = useOutletContext<any>();
  if (loading) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/home" replace />;
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

export default PublicRoute;
