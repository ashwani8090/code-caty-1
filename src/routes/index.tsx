import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  useOutletContext,
} from "react-router-dom";

import Login from "@pages/Login";
import Register from "@pages/Register";
import UserProfile from "@/pages/UserProfile";
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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="auth" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<UserProfile />} />
        <Route path="/home" element={<UserProfile />} />
      </Route>
    </Route>,
  ),
);
