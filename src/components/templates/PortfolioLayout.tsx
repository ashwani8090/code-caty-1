import { Outlet, useOutletContext } from "react-router-dom";

import Portfolio from "@/pages/Portfolio";

const PortfolioLayout = () => {
  const data = useOutletContext() ?? {};
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-10 md:flex">
        <Portfolio />
      </div>
      <div className="flex w-full max-w-full items-center p-5 md:w-1/2 md:max-w-lg md:pl-10">
        <Outlet context={{ ...data }} />
      </div>
    </div>
  );
};

export default PortfolioLayout;
