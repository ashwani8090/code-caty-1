import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import BasicDetails from "@/pages/BasicDetails";
import ContactDetails from "@/pages/ContactDetails";
import SkillDetails from "@/pages/SkillsDetails";
import PortfolioLayout from "@/components/templates/PortfolioLayout";
import UserProfile from "@/pages/UserProfile";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/auth" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<UserProfile />} />
        <Route path="home" element={<UserProfile />} />

        <Route path="portfolio" element={<PortfolioLayout />}>
          <Route path="basic" element={<BasicDetails />} />
          <Route path="contact" element={<ContactDetails />} />
          <Route path="skills" element={<SkillDetails />} />
        </Route>
      </Route>
    </Route>,
  ),
);
