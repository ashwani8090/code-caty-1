import React, { ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-10 md:flex">
        <h1 className="text-3xl font-bold text-white">Welcome To Code Caty</h1>
        <img src="/public/login.svg" className="size-96" />
      </div>
      <div className="flex w-full max-w-full items-center p-5 md:w-1/2 md:max-w-lg md:pl-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
