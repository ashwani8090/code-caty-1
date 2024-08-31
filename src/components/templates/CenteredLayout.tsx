import React, { ReactNode } from "react";

interface CenteredLayoutProps {
  children: ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {children}
    </div>
  );
};

export default CenteredLayout;
