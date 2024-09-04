import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserProfile from "@/pages/UserProfile";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/auth" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="home" element={<UserProfile />} />
      </Route>
    </Route>,
  ),
);
