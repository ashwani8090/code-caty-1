import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { Card, CardHeader } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FieldProps {
  control: Control<FormData>;
  name: keyof FormData;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: Partial<Record<keyof FormData, any>>;
}

const Field: React.FC<FieldProps> = ({ control, name, label, errors }) => {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={label}
            className={`w-full border p-2 ${
              errors[name] ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={label}
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const UserProfileForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data: ", data);
    setValue("lastName", "Singh");
  };

  return (
    <Card className="w-screen max-w-sm">
      <CardHeader className="rounded-md bg-slate-600 text-sm text-white">
        {JSON.stringify(getValues(), null, 2)}
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg">
        <Field
          control={control}
          errors={errors}
          name="firstName"
          label="First Name"
        />

        <Field
          control={control}
          errors={errors}
          name="lastName"
          label="Last Name"
        />

        <Field control={control} errors={errors} name="email" label="Email" />

        <Field
          control={control}
          errors={errors}
          name="password"
          label="Password"
        />

        <Field
          control={control}
          errors={errors}
          name="confirmPassword"
          label="Confirm Password"
        />

        <Button type="submit">Update Profile</Button>
      </form>
    </Card>
  );
};

export default UserProfileForm;
