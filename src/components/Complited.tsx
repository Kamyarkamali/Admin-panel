import { FC } from "react";

import { DefaultizedPieValueType } from "@mui/x-charts/models";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

//icons
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";

const data = [
  { label: "انجام شده", value: 400, color: "#0088FE" },
  { label: "تحویل داده شده", value: 300, color: "#00C49F" },
  { label: "دچار خطا", value: 300, color: "#FFBB28" },
  { label: "درحال عیب یابی", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const PieChartWithCustomizedLabel: FC = () => {
  return (
    <div className="bg-[#FFFF] dark:bg-slate-800 transition-all duration-200 ease-in dark:shadow-slate-900 shadow-md  max-w-[1200px] mx-auto w-[500px] flex flex-col items-center justify-center h-[450px] rounded-lg">
      <div className="flex items-center justify-center w-full mb-[9rem]">
        <div className="flex flex-col gap-2 items-start w-full mr-9 mt-4">
          <span className="text-xl font-bold text-gray-500 dark:text-white">
            گزارش پشتیبانی
          </span>
          <span className="opacity-75 text-sm">7 روز گذشته</span>
        </div>

        <div className="flex flex-col gap-2 items-start w-full mr-9 mt-4">
          <span className="text-3xl font-bold text-gray-500 dark:text-white">
            164
          </span>
          <span className="opacity-75 text-sm">کل تیکت ها</span>
        </div>
        <IoEllipsisVerticalSharp
          size={50}
          color="gray"
          className="cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
            <p className="bg-blue-200 p-1 mr-4 rounded-md">
              <TiTicket size={23} color="blue" />
            </p>
            <div className="flex flex-col">
              <span>تیک جدید</span>
              <span className="text-[11px]">142</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
              <p className="bg-blue-200 p-1 mr-4 rounded-md">
                <TiTick size={23} color="green" />
              </p>
              <div className="flex flex-col">
                <span>تیک باز</span>
                <span className="text-[11px]">28</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
              <p className="bg-blue-200 p-1 mr-4 rounded-md">
                <IoTimeOutline size={23} color="orange" />
              </p>
              <div className="flex flex-col">
                <span>زمان پاسخگویی</span>
                <span className="text-[11px]">1 روز</span>
              </div>
            </div>
          </div>
        </div>

        <PieChart
          series={[
            {
              outerRadius: 100,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </div>
    </div>
  );
};

export default PieChartWithCustomizedLabel;
