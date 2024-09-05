import { Outlet, useOutletContext } from "react-router-dom";

import Portfolio from "@/pages/Portfolio";

const PortfolioLayout = () => {
  const data = useOutletContext() ?? {};
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-3/5 flex-col items-center justify-center md:flex">
        <Portfolio />
      </div>
      <div className="flex w-full max-w-full items-center p-10 md:w-2/5 md:py-10">
        <Outlet context={{ ...data }} />
      </div>
    </div>
  );
};

export default PortfolioLayout;
