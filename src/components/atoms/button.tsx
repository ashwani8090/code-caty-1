import React from "react";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
  }
> = ({ variant = "primary", ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-semibold focus:outline-none";
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-gray-600",
    danger: "bg-danger text-white hover:bg-red-600",
  };

  return (
    <button
      className={`font-bold text-[12px] ${baseClasses} ${variantClasses[variant]}`}
      {...props}
    />
  );
};

export default Button;
