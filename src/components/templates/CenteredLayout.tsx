import React, { ReactNode } from "react";

interface CenteredLayoutProps {
  children: ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default CenteredLayout;
