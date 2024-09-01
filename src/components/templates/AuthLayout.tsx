import React, { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center p-10 md:flex">
        <h1 className="text-2xl font-bold">Welcome To Code Caty</h1>
        <img src="/public/signup.svg" className="size-96" />
      </div>
      <div className="flex w-full max-w-full items-center p-5 md:w-1/2 md:max-w-sm md:p-0">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
