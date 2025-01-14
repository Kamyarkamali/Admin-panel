import { FC, useContext, useEffect } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";

//image
import image1 from "../assets/images/11.png";
import image2 from "../assets/images/12.png";
import image4 from "../assets/images/14.png";
import image5 from "../assets/images/15.png";
import { Context } from "../context/ContextProvider";

const MenuSetting: FC = () => {
  /* @ts-ignore */
  const { theme, shadow, setShadow, menuSetting, setMenuSetting, setOpen } =
    useContext(Context);

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

  const closeHandeler = () => {
    if (menuSetting) {
      setMenuSetting(false);
    } else {
      setMenuSetting(true);
    }
  };

  return (
    <div className="fixed left-0">
      <div className="transition-all hidden lg:block duration-200 ease-in bg-[#FFFF] dark:bg-slate-800 w-[400px] h-screen shadow-lg shadow-gray-300 p-1 rounded-lg">
        <div className="flex gap-2 items-center justify-between ml-4 border-b-[1px] border-gray-300 ">
          <div className="p-3 flex flex-col gap-1">
            <h3 className="text-gray-500 font-bold dark:text-white">
              شخصی سازی قالب
            </h3>
            <p className="text-md text-gray-500 dark:text-white">
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
          {/* <p className="mt-3 mr-3 dark:text-white bg-gray-200 rounded-lg inline-block p-1 text-[13px] text-blue-400">
            پوسته ها
          </p>

          <p className="text-sm dark:text-white text-center mb-3 text-gray-400">
            استایل ها (حالت دهی)
          </p> */}
          <div className="flex items-center justify-center gap-5">
            {/* <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <MdOutlineLightMode size={30} color="gray" />
              <span className="text-sm dark:text-white text-blue-600">
                روشن
              </span>
            </div> */}
            {/* <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <MdDarkMode size={30} color="gray" />
              <span className="text-sm dark:text-white text-blue-600">
                تاریک
              </span>
            </div> */}
            {/* <div className="border-[1px] cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <MdOutlineComputer size={30} color="gray" />
              <span className="text-sm dark:text-white text-blue-600">
                سیستم
              </span>
            </div> */}
          </div>
        </div>

        <div>
          <p className="mt-3 mr-3 dark:text-white bg-gray-200 rounded-lg inline-block p-1 text-[13px] text-blue-400">
            پوسته ها
          </p>

          <p className="text-sm text-center dark:text-white mb-3 text-gray-400">
            استایل ها (حالت دهی)
          </p>
          <div className="flex items-center justify-center gap-5">
            <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <img onClick={() => setShadow(true)} src={image1} alt="/" />
              <div className="absolute bottom-[-1.3rem]">
                <span
                  onClick={() => setShadow(true)}
                  className="text-[12px] dark:text-white text-blue-600"
                >
                  {" "}
                  پیش فرض
                </span>
              </div>
            </div>
            <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <img onClick={() => setShadow(!shadow)} src={image2} alt="/" />
              <div className="absolute bottom-[-1.3rem]">
                <span
                  onClick={closeHandeler}
                  className="text-[12px] dark:text-white text-blue-600"
                >
                  حاشیه دار
                </span>
              </div>
            </div>
            {/* <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <img src={image3} alt="/" />

              <div className="absolute bottom-[-1.3rem]">
                <span className="text-[12px] dark:text-white text-blue-600">
                  نیمه تاریک
                </span>
              </div>
            </div> */}
          </div>
        </div>

        <div>
          <p className="mt-9 dark:text-white mr-3 rounded-lg inline-block p-3 text-[13px] text-blue-400">
            صفحات منوی کناری
          </p>

          <div className="flex p-3 items-center justify-center gap-5">
            <div className="border-[1px] relative flex flex-col cursor-pointer items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <img onClick={() => setOpen(true)} src={image4} alt="/" />
              <div className="absolute bottom-[-1.3rem] right-0">
                <span
                  onClick={() => setOpen(true)}
                  className="text-[12px] dark:text-white mt-4 text-blue-600"
                >
                  منو باز
                </span>
              </div>
            </div>
            <div className="border-[1px] relative cursor-pointer flex flex-col items-center justify-center w-[100px] h-[70px] border-gray-300 rounded-lg">
              <img onClick={() => setOpen(false)} src={image5} alt="/" />
              <div className="absolute bottom-[-1.3rem] right-0">
                <span
                  onClick={() => setOpen(false)}
                  className="text-[12px] dark:text-white mt-4 text-blue-600"
                >
                  منو بسته
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div>left</div> */}
      </div>
    </div>
  );
};

export default MenuSetting;
