import { FC, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

//icons
import { TbBrandCashapp } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import { PiCashRegisterLight } from "react-icons/pi";
import { Context } from "../context/ContextProvider";

const ChartPrices: FC = () => {
  const [progress] = useState<number>(60);
  const [mony] = useState<number>(74);
  const [monys] = useState<number>(72);
  /* @ts-ignore */
  const { shadow, setShadow } = useContext(Context);

  return (
    <div
      className={
        "flex flex-col items-center gap-4 shadow-lg p-3 rounded-lg mx-auto w-[330px] sm:max-w-[700px] md:max-w-[710px] lg:max-w-[400px]"
      }
    >
      <div className="flex flex-col gap-2 items-center text-sm w-full">
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
            width: "100%",
            height: "10px",
            maxWidth: "400px",
            marginTop: "7px",
          }}
          now={progress}
          label={`${progress}%`}
        />
      </div>

      <div className="flex flex-col gap-2 items-center text-sm w-full">
        <div className="flex justify-start w-full items-center gap-2">
          <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
            <IoIosTimer size={22} color="orange" />
          </span>
          <span>سود</span>
        </div>
        <span>256 تومان</span>
        <ProgressBar
          style={{
            width: "100%",
            height: "10px",
            maxWidth: "400px",
            marginTop: "7px",
          }}
          now={mony}
          label={`${mony}%`}
        />
      </div>

      <div className="flex flex-col gap-2 items-center text-sm w-full">
        <div className="flex justify-start w-full items-center gap-2">
          <span className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
            <PiCashRegisterLight size={22} color="red" />
          </span>
          <span>هزینه ها</span>
        </div>
        <span>74.19 تومان</span>
        <ProgressBar
          variant="warning"
          style={{
            width: "100%",
            height: "10px",
            maxWidth: "400px",
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
