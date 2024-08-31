import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardHeader } from "@/components/molecules/card";
import FormBuilder from "@/components/molecules/FormBuilder";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

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
  const form = useForm<FormData>({
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
          <CardContent>
            <FormBuilder
              form={form}
              onSubmit={onSubmit}
              fields={[
                {
                  name: "firstName",
                  label: "First Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "lastName",
                  label: "Last Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "text",
                  required: true,
                },
                {
                  name: "password",
                  label: "Password",
                  type: "password",
                  required: true,
                },
                {
                  name: "confirmPassword",
                  label: "Confirm Password",
                  type: "password",
                  required: true,
                },
              ]}
            >
              <Button type="submit" className="w-full">
                Register
              </Button>
            </FormBuilder>
          </CardContent>

          {/* <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg">
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
          </form> */}
        </Card>
      </div>
    </div>
  );
};

export default UserProfileForm;
