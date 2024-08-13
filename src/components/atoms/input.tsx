import React, { useId } from "react";

// Define props type for the Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// Create an Input component in React
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col align-start">
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} {...props} />
      </div>
    );
  },
);

export default Input;
