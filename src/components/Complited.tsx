import { FC, useContext } from "react";
import { DefaultizedPieValueType } from "@mui/x-charts/models";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

//icons
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { IoTimeOutline } from "react-icons/io5";
import { Context } from "../context/ContextProvider";

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
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`bg-[#FFFF] dark:bg-slate-800 transition-all duration-200 ease-in dark:shadow-slate-900 ${
        shadow && "shadow-md"
      } max-w-[1200px] mx-auto sm:w-[500px] w-[330px] flex flex-col items-center justify-center lg:h-[450px] sm:h-[450px] rounded-lg p-4`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-4 sm:mb-[9rem] gap-4 sm:gap-0">
        <div className="flex flex-col gap-2 items-center sm:items-start w-full sm:w-auto sm:mr-9 mt-4">
          <span className="text-xl font-bold text-gray-500 dark:text-white">
            گزارش پشتیبانی
          </span>
          <span className="opacity-75 text-sm">7 روز گذشته</span>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-start w-full sm:w-auto sm:mr-9 mt-4">
          <span className="text-3xl font-bold text-gray-500 dark:text-white">
            164
          </span>
          <span className="opacity-75 text-sm">کل تیکت ها</span>
        </div>
        <IoEllipsisVerticalSharp
          size={30}
          color="gray"
          className="cursor-pointer"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
            <p className="bg-blue-200 p-1 rounded-md">
              <TiTicket size={23} color="blue" />
            </p>
            <div className="flex flex-col items-center sm:items-start">
              <span>تیک جدید</span>
              <span className="text-[11px]">142</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
            <p className="bg-blue-200 p-1 rounded-md">
              <TiTick size={23} color="green" />
            </p>
            <div className="flex flex-col items-center sm:items-start">
              <span>تیک باز</span>
              <span className="text-[11px]">28</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-bold dark:text-white">
            <p className="bg-blue-200 p-1 rounded-md">
              <IoTimeOutline size={23} color="orange" />
            </p>
            <div className="flex flex-col items-center sm:items-start">
              <span>زمان پاسخگویی</span>
              <span className="text-[11px]">1 روز</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full sm:w-auto">
          <PieChart
            series={[
              {
                outerRadius: 100,
                data,
                /* @ts-ignore */
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
    </div>
  );
};

export default PieChartWithCustomizedLabel;
