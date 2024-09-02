import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "@pages/Login";
import Register from "@pages/Register";
import UserProfile from "@/pages/UserProfile";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

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
