import React, { useState } from "react";

import Button from "../atoms/button";
import Input from "../atoms/input";

const FormComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <div>
      <h1>Form Component</h1>
      <Input
        type="text"
        placeholder="Enter some text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default FormComponent;
