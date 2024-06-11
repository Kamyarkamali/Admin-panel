import { FC } from "react";

import ReportCharts from "./ReportCharts";
import ChartPrices from "./ChartPrices";
import ComplidetCharts from "./Complited";

const Main2: FC = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center gap-3 justify-center max-w-[120px] mx-auto">
      <div className="ml-14 lg:ml-0">
        <ReportCharts />
      </div>

      <div className="xl:hidden ml-14">
        <ChartPrices />
      </div>

      <div className="ml-14">
        <ComplidetCharts />
      </div>
    </div>
  );
};

export default Main2;
