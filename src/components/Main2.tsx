import { FC } from "react";

import ReportCharts from "./ReportCharts";
import ChartPrices from "./ChartPrices";
import ComplidetCharts from "./Complited";

const Main2: FC = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center gap-3 justify-between max-w-[1230px] mx-auto">
      <div>
        <ReportCharts />
      </div>

      <div className="xl:hidden">
        <ChartPrices />
      </div>

      <div>
        <ComplidetCharts />
      </div>
    </div>
  );
};

export default Main2;
