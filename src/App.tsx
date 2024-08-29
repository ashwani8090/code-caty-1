import { useForm } from "react-hook-form";

import CenteredLayout from "@components/templates/CenteredLayout";

import "./App.css";
import UserProfileForm from "./pages/UserDetails";

function App() {
  const form = useForm();
  console.log(form);
  return (
    <CenteredLayout>
      <UserProfileForm />
    </CenteredLayout>
  );
}

export default App;
