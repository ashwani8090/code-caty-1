import * as React from "react";

import { cn } from "src/utils/index";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, name, required, type, ...props }, ref) => {
    return (
      <>
        <label
          htmlFor={name}
          className={`block text-sm font-bold text-gray-700 ${required && "required"}`}
        >
          {label}
        </label>
        <input
          id={name}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:border-2 focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
Input.displayName = "Input";

export { Input };
