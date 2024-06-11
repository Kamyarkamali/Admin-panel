import { FC, useContext } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuUserPlus2 } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { Context } from "../context/ContextProvider";

const Sod: FC = () => {
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`bg-[#ffff] dark:bg-slate-800 lg:w-[400px] w-[300px] h-[530px] transition-all duration-200 ease-in dark:text-white ${
        shadow && "shadow-md"
      } dark:shadow-gray-900 rounded-lg`}
    >
      <div className="rounded-lg">
        <div className="flex flex-col gap-10 mr-4 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-white mt-2 text-xl">
              منابع بازدید
            </span>
          </div>
          <span className="text-sm opacity-75">لینک مستقیم</span>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-gray-200 p-2 rounded-md">
              <BiBookBookmark size={22} color="green" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-700 lg:text-md text-[12px] font-bold dark:text-white">
                منابع مستقل
              </span>
              <span className="lg:text-sm text-[11px] opacity-65">
                لینک مستقیم
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-sm font-bold dark:text-white">
              1.2K
            </span>
            <span className="bg-green-300 w-[70px] flex justify-center text-slate-800 dark:text-white rounded-md">
              1.2%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-gray-200 p-2 rounded-md">
              <MdOutlinePermMedia size={22} color="blue" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 lg:text-md text-[12px] font-bold dark:text-white">
                رسانه ها
              </span>
              <span className="lg:text-sm text-[11px] opacity-65">
                سوشیال مدیا
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-sm font-bold dark:text-white">
              8734
            </span>
            <span className="bg-green-300 w-[70px] flex justify-center text-slate-800 dark:text-white rounded-md">
              12%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-gray-200 p-2 rounded-md">
              <MdOutlineMarkEmailRead size={22} color="blue" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 lg:text-md text-[12px] font-bold dark:text-white">
                خبرنامه
              </span>
              <span className="lg:text-sm text-[11px] opacity-65">
                کمپین ایمیلی
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-sm font-bold dark:text-white">
              8734
            </span>
            <span className="bg-green-300 w-[70px] flex justify-center text-slate-800 dark:text-white rounded-md">
              2.4%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-gray-200 p-2 rounded-md">
              <LuUserPlus2 size={22} color="blue" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 lg:text-md text-[11px] font-bold dark:text-white">
                باشگاه مشتریان
              </span>
              <span className="lg:text-sm text-[11px] opacity-65">
                بازاریابی هرمی
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-sm font-bold dark:text-white">
              8734
            </span>
            <span className="bg-green-300 w-[70px] flex justify-center text-slate-800 dark:text-white rounded-md">
              5.1%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between ml-3 mt-4">
          <div className="flex gap-4 items-center">
            <div className="mr-5 bg-gray-200 p-2 rounded-md">
              <FaRegStar size={22} color="blue" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-700 lg:text-md text-[11px] font-bold dark:text-white">
                سایر موارد
              </span>
              <span className="lg:text-sm text-[11px] opacity-65">
                منابع بسیار
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 lg:text-md text-sm font-bold dark:text-white">
              8734
            </span>
            <span className="bg-green-300 w-[70px] flex justify-center text-slate-800 dark:text-white rounded-md">
              2.4%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sod;
