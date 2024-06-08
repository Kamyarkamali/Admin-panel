import { FC, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

//icons
import { TbBrandCashapp } from "react-icons/tb";
import { BarChart } from "@mui/x-charts";
import { IoIosTimer } from "react-icons/io";
import { PiCashRegisterLight } from "react-icons/pi";

const BasicBars: FC = () => {
  const [progress, setProgress] = useState<number>(60);
  const [mony, setMony] = useState<number>(74);

  const [monys, setMonys] = useState<number>(72);
  const [chartWidth, setChartWidth] = useState<number>(680);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setChartWidth(680);
      } else if (width >= 992) {
        setChartWidth(600);
      } else if (width >= 768) {
        setChartWidth(500);
      } else {
        setChartWidth(500);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#FFFF] max-w-[1200px] mx-auto w-[700px] dark:bg-slate-800 dark:shadow-gray-900 dark:text-[#FFFF] rounded-lg  shadow-md transition-all duration-200 ease-in ">
      <div className="flex flex-col items-center gap-2">
        <p className="mt-3 text-xl text-orange-500 dark:text-white">
          گزارش فروش
        </p>
        <span className="dark:text-white text-blue-700 font-bold">
          گزارش فروش سال 1403
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center w-[200px] gap-2">
          <span className="font-bold dark:text-white text-xl">468 تومان</span>
          <span className="bg-green-300 p-1 rounded-md text-[13px] text-green-700 font-bold">
            +4.2%
          </span>
          <span className="text-[12px] text-center opacity-60 w-[120px] leading-5">
            نمودار درآمد شما برای هر روز در هفته جاری قابل مشاهده می باشد.
          </span>
        </div>

        <div className="xl:flex hidden ml-3 items-center gap-4 border-[1px] shadow-sm p-3 rounded-lg">
          <div className="flex flex-col gap-2 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
                <TbBrandCashapp size={22} color="green" />
              </span>
              <span>فروش</span>
            </div>
            <span>238 تومان</span>
            <ProgressBar
              variant="success"
              style={{
                width: "150px",
                height: "10px",
                maxWidth: "400px",
                margin: "auto",
                marginTop: "7px",
              }}
              now={progress}
              label={`${progress}%`}
            />
          </div>

          <div className="flex flex-col gap-2 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
                <IoIosTimer size={22} color="orange" />
              </span>
              <span>سود</span>
            </div>
            <span>256 تومان</span>
            <ProgressBar
              style={{
                width: "150px",
                height: "10px",
                maxWidth: "400px",
                margin: "auto",
                marginTop: "7px",
              }}
              now={mony}
              label={`${mony}%`}
            />
          </div>

          <div className="flex flex-col gap-2 items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
                <PiCashRegisterLight size={22} color="red" />
              </span>
              <span>هزینه ها</span>
            </div>
            <span>74.19 تومان</span>
            <ProgressBar
              variant="warning"
              style={{
                width: "150px",
                height: "10px",
                maxWidth: "400px",
                margin: "auto",
                marginTop: "7px",
              }}
              now={monys}
              label={`${monys}%`}
            />
          </div>
        </div>
      </div>

      <BarChart
        xAxis={[{ scaleType: "band", data: ["فروردین", "اردیبهشت", "خرداد"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={chartWidth}
        height={250}
      />
    </div>
  );
};

export default BasicBars;
