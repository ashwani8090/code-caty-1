import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import FormBuilder from "@/components/molecules/FormBuilder";
import AuthLayout from "@/components/templates/AuthLayout";

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

const Register: React.FC = () => {
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
    <AuthLayout>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-primary">Sign In to CodeCaty</h2>
        <div className="py-5">
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
          <div className="flex items-center justify-center py-2 text-sm">
            Already have an account? &nbsp;
            <a className="text-primary" href="/auth/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
