import "./App.css";
import MultiStepForm from "./components/molecules/Stepper";
import FormProvider from "./contexts/FormProvider";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;
