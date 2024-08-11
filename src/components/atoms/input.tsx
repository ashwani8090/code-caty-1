import React, { useId } from "react";

// Create an Input component in React
const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, ...props }) => {
  const id = useId();
  return (
    <div className="flex flex-col align-start">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
