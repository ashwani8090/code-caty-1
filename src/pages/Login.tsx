import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { setCookie } from "react-use-cookie";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/button";
import FormBuilder from "@/components/molecules/FormBuilder";
import AuthLayout from "@/components/templates/AuthLayout";
import { AuthContext } from "@/contexts/AuthProvider";

interface FormData {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login: React.FC = () => {
  const { setUser } = useContext(AuthContext);

  const [loading, setloading] = useState(false);
  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "emilys",
      password: "emilyspass",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setloading(true);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setCookie("token", data?.token);
        setUser(data);
      });
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
                name: "username",
                label: "Username",
                type: "text",
                required: true,
              },
              {
                name: "password",
                label: "Password",
                type: "password",
                required: true,
              },
            ]}
          >
            <Button type="submit" className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </FormBuilder>
          <div className="flex items-center justify-center py-2 text-sm">
            Don't have account? &nbsp;
            <Link className="text-primary" to="/auth/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
