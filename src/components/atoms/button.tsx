import React from "react";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
  }
> = ({ variant = "primary", ...props }) => {
  const baseClasses =
    "px-4 py-2 rounded font-semibold focus:outline-none bg-red";
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-secondary text-white hover:bg-gray-600",
    danger: "bg-danger text-white hover:bg-red-600",
  };

  return (
    <button
      className={`bg-red text-[12px] font-bold hover:mx-1 focus:my-2 sm:mx-2 md:mx-2 ${baseClasses} ${variantClasses[variant]}`}
      {...props}
    />
  );
};

export default Button;
