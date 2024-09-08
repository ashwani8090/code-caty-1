/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";

import { Input } from "@/components/atoms/input";

export interface FieldProps {
  name: string;
  label: string;
  required: boolean;
  type: string;
  className?: string;
  onValueChange?: (field: string, value: any) => void;
}

const Field: React.FC<FieldProps> = ({
  name,
  label,
  type,
  required,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            {...props}
            label={label}
            className={`w-full border p-2 ${
              errors[name] ? "border-red-500" : "border-gray-300"
            } ${props?.className}`}
            placeholder={label}
            required={required}
            type={type}
            onChange={(e) => {
              field.onChange(e);
              if (props?.onValueChange) {
                props?.onValueChange(name, e.target.value);
              }
            }}
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{(errors as any)[name]?.message}</p>
      )}
    </div>
  );
};

export default Field;
