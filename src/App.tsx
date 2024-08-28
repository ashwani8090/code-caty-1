import { useForm } from "react-hook-form";

import CenteredLayout from "@components/templates/CenteredLayout";
import "./App.css";

function App() {
  const form = useForm();
  console.log(form);
  return (
    <CenteredLayout>
      <div className="flex w-[200px]"></div>
    </CenteredLayout>
  );
}

export default App;
