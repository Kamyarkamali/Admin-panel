import { FC, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

//icons
import { FiShoppingCart } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { Context } from "../context/ContextProvider";

const Sales: FC = () => {
  const [progress] = useState<number>(60);
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`${
        shadow && "shadow-md"
      } bg-[#ffff] dark:bg-slate-800 dark:text-white shadow-gray-200 dark:shadow-slate-900 transition-all duration-200 ease-in rounded-lg lg:w-[350px] md:w-[740px] sm:w-[610px] w-[390px] h-[240px]`}
    >
      <div>
        <div className="flex items-center justify-between p-3">
          <p className="mr-3 dark:text-white text-sm text-gray-500">
            آمار فروش
          </p>
          <p className="ml-3 dark:text-white text-green-500 text-sm">18.3%</p>
        </div>
        <div className="flex gap-1 mr-3 text-xl font-bold">
          <p>K</p>
          <p>42</p>
          <p>تومان</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center mr-4 mt-4 gap-2">
            <p className="text-gray-500  dark:text-white text-sm">سفارشات</p>
            <div className="bg-gray-200 p-1 rounded-md">
              <FiShoppingCart size={16} color="blue" />
            </div>
          </div>

          <div className="flex items-center ml-4 mt-4 gap-2">
            <p className="text-gray-500  dark:text-white text-sm">بازدید</p>
            <div className="bg-gray-200 p-1 rounded-md">
              <GrView size={16} color="blue" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="mr-4 mt-3 text-gray-500 dark:text-white text-md font-bold">
              25%
            </p>
            <span className="mr-4 text-[12px] opacity-55">25540</span>
          </div>
          <div>
            <p className="ml-4 mt-3 text-gray-500 dark:text-white text-md font-bold">
              31%
            </p>
            <span className="ml-4 text-[12px] opacity-55">3256</span>
          </div>
        </div>

        <ProgressBar
          style={{
            width: "220px",
            maxWidth: "400px",
            margin: "auto",
            marginTop: "7px",
          }}
          now={progress}
          label={`${progress}%`}
        />
      </div>
    </div>
  );
};

export default Sales;
