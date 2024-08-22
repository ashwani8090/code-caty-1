import Button from "./components/atoms/button";
import Input from "./components/atoms/input";
import FormComponent from "./components/molecules/Form";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello Code Caty</h1>
      <label htmlFor="name">Name</label>
      <Input id="name" />

      <label htmlFor="email">Email</label>
      <Input id="email" />

      <Button>Submit</Button>
      <FormComponent />
    </>
  );
}

export default App;
