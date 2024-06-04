import { FC, useContext, useEffect } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { Isetting } from "../types/interface";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";

//image
import image1 from "../assets/images/11.png";
import image2 from "../assets/images/12.png";
import image3 from "../assets/images/13.png";
import image4 from "../assets/images/14.png";
import image5 from "../assets/images/15.png";
import { Context } from "../context/ContextProvider";

const MenuSetting: FC<Isetting> = ({ menuSetting, setMenuSetting }) => {
  const { theme, setTheme } = useContext(Context);

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();

        break;
    }
  }, [theme]);

  return (
    <div className="transition-all hidden lg:block duration-200 ease-in bg-white dark:bg-slate-800 dark:text-white w-[400px] h-screen shadow-lg shadow-gray-300 p-1 rounded-lg">
      <div className="flex gap-2 items-center justify-between ml-4 border-b-[1px] border-gray-300 ">
        <div className="p-3 flex flex-col gap-1">
          <h3 className="text-gray-500 font-bold">شخصی سازی قالب</h3>
          <p className="text-md text-gray-500">
            شخصی سازی کنید و در لحظه تعیرات را ببینید
          </p>
        </div>
        <div className="flex items-center">
          <RxUpdate size={20} color="gray" />
          <IoCloseOutline
            onClick={() => setMenuSetting(true)}
            size={25}
            color="gray"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div>
        <p className="mt-3 mr-3 bg-gray-200 rounded-lg inline-block p-1 text-[13px] text-blue-400">
          پوسته ها
        </p>

        <p className="text-sm text-center mb-3 text-gray-400">
          استایل ها (حالت دهی)
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <MdOutlineLightMode size={30} color="gray" />
            <span className="text-sm text-blue-600">روشن</span>
          </div>
          <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <MdDarkMode size={30} color="gray" />
            <span className="text-sm text-blue-600">تاریک</span>
          </div>
          <div className="border-[1px] cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <MdOutlineComputer size={30} color="gray" />
            <span className="text-sm text-blue-600">سیستم</span>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-3 mr-3 bg-gray-200 rounded-lg inline-block p-1 text-[13px] text-blue-400">
          پوسته ها
        </p>

        <p className="text-sm text-center mb-3 text-gray-400">
          استایل ها (حالت دهی)
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <img src={image1} alt="/" />
            <div className="absolute bottom-[-1.3rem]">
              <span className="text-[12px] text-blue-600"> پیش فرض</span>
            </div>
          </div>
          <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <img src={image2} alt="/" />
            <div className="absolute bottom-[-1.3rem]">
              <span className="text-[12px] text-blue-600">حاشیه دار</span>
            </div>
          </div>
          <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <img src={image3} alt="/" />

            <div className="absolute bottom-[-1.3rem]">
              <span className="text-[12px] text-blue-600">نیمه تاریک</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-9 mr-3 rounded-lg inline-block p-3 text-[13px] text-blue-400">
          صفحات منوی کناری
        </p>

        <div className="flex p-3 items-center justify-center gap-5">
          <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <img src={image4} alt="/" />
            <div className="absolute bottom-[-1.3rem] right-0">
              <span className="text-[12px] mt-4 text-blue-600">منو باز</span>
            </div>
          </div>
          <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
            <img src={image5} alt="/" />
            <div className="absolute bottom-[-1.3rem] right-0">
              <span className="text-[12px] mt-4 text-blue-600">منو بسته</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div>left</div> */}
    </div>
  );
};

export default MenuSetting;
