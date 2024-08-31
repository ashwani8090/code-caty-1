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
    <div className="flex w-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center p-10 md:flex">
        <h1 className="text-2xl font-bold">Welcome To Code Caty</h1>
        <img src="/public/signup.svg" className="size-96" />
      </div>
      <div className="w-full max-w-full p-5 md:w-1/2 md:max-w-sm md:p-0">
        <Card className="w-full">
          <CardHeader className="rounded-t-md bg-primary text-lg text-white">
            Register
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

            <Field
              control={control}
              errors={errors}
              name="email"
              label="Email"
            />

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

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UserProfileForm;
