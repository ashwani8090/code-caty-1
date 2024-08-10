import React, { useState } from "react";

import Button from "@atoms/button";
import Input from "@atoms/input";

const FormComponent: React.FC = () => {
  const [form, setForm] = useState({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <form className="flex flex-col">
      <h1>Form Component</h1>
      <div>
        <pre className="t-white" style={{ wordBreak: "break-all" }}>
          {JSON.stringify(form, null, 1)}
        </pre>
      </div>
      <Input
        type="text"
        placeholder="Enter some text"
        onChange={handleInputChange}
        name="first_name"
        label="First Name"
      />

      <Input
        type="text"
        placeholder="Enter some text"
        onChange={handleInputChange}
        name="last_name"
        label="Last Name"
      />

      <Input
        type="text"
        placeholder="Enter some text"
        onChange={handleInputChange}
        name="email"
        label="Email"
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export default FormComponent;
