import React from "react";

// Create an Input component in React
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} />
);

export default Input;
