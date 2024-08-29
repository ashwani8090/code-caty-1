import { useForm } from "react-hook-form";

import CenteredLayout from "@components/templates/CenteredLayout";
import "./App.css";

function App() {
  const form = useForm();
  console.log(form);
  return (
    <CenteredLayout>
      <div className="flex space-x-4"></div>
    </CenteredLayout>
  );
}

export default App;
