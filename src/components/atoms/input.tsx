import React from "react";

// Create an Input component in React
const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = (props) => (
  <div className="flex flex-col align-start">
    <label htmlFor={props?.name}>{props?.label}</label>
    <input {...props} />
  </div>
);

export default Input;
