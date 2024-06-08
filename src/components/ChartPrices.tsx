import { FC, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

//icons
import { TbBrandCashapp } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import { PiCashRegisterLight } from "react-icons/pi";

const ChartPrices: FC = () => {
  const [progress, setProgress] = useState<number>(60);
  const [mony, setMony] = useState<number>(74);

  const [monys, setMonys] = useState<number>(72);
  const [chartWidth, setChartWidth] = useState<number>(680);

  return (
    <div className="flex flex-col max-w-[1200px] lg:w-[400px] md:w-[710px] sm:w-[700px] mx-auto ml-3 items-center gap-4 border-[1px] shadow-sm p-3 rounded-lg">
      <div className="flex flex-col gap-2 items-center text-sm">
        <div className="flex justify-start w-full items-center gap-2">
          <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
            <TbBrandCashapp size={22} color="green" />
          </span>
          <span>فروش</span>
        </div>
        <span>238 تومان</span>
        <ProgressBar
          variant="success"
          style={{
            width: "380px",
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
        <div className="flex justify-start w-full  items-center gap-2">
          <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
            <IoIosTimer size={22} color="orange" />
          </span>
          <span>سود</span>
        </div>
        <span>256 تومان</span>
        <ProgressBar
          style={{
            width: "380px",
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
        <div className="flex justify-start w-full  items-center gap-2">
          <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
            <PiCashRegisterLight size={22} color="red" />
          </span>
          <span>هزینه ها</span>
        </div>
        <span>74.19 تومان</span>
        <ProgressBar
          variant="warning"
          style={{
            width: "380px",
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
  );
};

export default ChartPrices;
