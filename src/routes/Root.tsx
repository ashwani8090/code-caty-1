import { Outlet } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

const Root = () => {
  const { loading, user, setUser } = useAuth();
  if (loading) return <div>Loading...</div>;

  return (
    <Outlet
      context={{
        loading,
        user,
        setUser,
      }}
    />
  );
};
export default Root;
