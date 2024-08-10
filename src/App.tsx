import { useForm } from "react-hook-form";

import FormComponent from "@components/molecules/Form";
// import Counter from "@components/molecules/Counter";
import "./App.css";

function App() {
  const form = useForm();
  console.log(form);
  return (
    <>
      <h1>Hello Code Caty</h1>
      {/* <Counter /> */}

      <FormComponent />
    </>
  );
}

export default App;
