import { FC, useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { PiCursorClick } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import { BsBan } from "react-icons/bs";
import { Context } from "../context/ContextProvider";

const Sod: FC = () => {
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`bg-[#ffff] dark:bg-slate-800 lg:w-[400px] w-[300px] h-[530px] dark:text-white ${
        shadow && "shadow-md"
      } dark:shadow-gray-900 rounded-lg transition-all duration-200 ease-in`}
    >
      <div className="transition-all duration-200 ease-in rounded-lg">
        <div className="flex flex-col gap-10 mr-4 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 lg:text-lg text-[15px] dark:text-white mt-2">
              گزارش ماهیانه کمپین ها
            </span>
            <CiMenuKebab size={23} color="gray" className="cursor-pointer" />
          </div>
          <span className="text-sm opacity-75">8.52k بازدید رسانه‌ها</span>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-green-200 p-2 rounded-md">
              <MdOutlineMailOutline size={22} color="green" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              ایمیل ها
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-[11px] font-bold dark:text-white">
              12346
            </span>
            <span className="text-green-500">0.3%</span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-blue-200 p-2 rounded-md">
              <MdOutlinePersonPinCircle size={22} color="blue" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              شرکت کننده ها
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-[11px] font-bold dark:text-white">
              8734
            </span>
            <span className="text-green-500">12%</span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-blue-300 p-2 rounded-md">
              <LuUsers size={22} color="blue" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              دنبال کننده ها
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 font-bold dark:text-white">345</span>
            <span className="text-green-500">12%</span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-yellow-500 p-2 rounded-md">
              <PiCursorClick size={22} color="yellow" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              کلیک کننده ها
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-[11px] font-bold dark:text-white">
              81323
            </span>
            <span className="text-green-500">18%</span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-red-200 p-2 rounded-md">
              <IoWarningOutline size={22} color="red" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              شکایات
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-[11px] font-bold dark:text-white">
              10
            </span>
            <span className="text-green-500">%1.5</span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-red-200 p-2 rounded-md">
              <BsBan size={22} color="red" />
            </div>
            <span className="text-gray-700 lg:text-[13px] text-[11px] font-bold dark:text-white">
              لغو اشتراک
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-[11px] font-bold dark:text-white">
              7
            </span>
            <span className="text-green-500">%4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sod;
