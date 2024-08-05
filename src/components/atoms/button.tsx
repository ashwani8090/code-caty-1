import React from "react";

// Create a button component in React
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} />
);

export default Button;
