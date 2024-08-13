import React from "react";

// Create a button component in React
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => <button {...props} ref={ref} />);
export default Button;
