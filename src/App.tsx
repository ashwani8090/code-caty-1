import { useForm } from "react-hook-form";

import Button from "./components/atoms/button";
import "./App.css";
import Message from "./components/atoms/message";

function App() {
  const form = useForm();
  console.log(form);
  return (
    <div className="min-h-screen flex flex-col w-screen">
      <div className="p-2 space-x-2 flex">
        <Button>Submit</Button>
        <Button variant="danger">Submit</Button>
        <Button variant="secondary">Submit</Button>
      </div>
      <div className="p-2 space-x-2 flex">
        <Message type="success" message="Your operation was successful!" />
        <Message
          type="danger"
          message="Something went wrong. Please try again."
        />
        <Message type="info" message="This is some informational message." />
      </div>
    </div>
  );
}

export default App;
