import { FC, useContext, useEffect, useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { notifdata } from "../data/LocalData";

//icons
import { IoCloseOutline } from "react-icons/io5";
import { Inotif } from "../types/interface";
import { Context } from "../context/ContextProvider";

const Notifay: FC = () => {
  const [notifications, setNotifications] = useState<Inotif[]>(notifdata);

  const handeleDelete = (id: number) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  /* @ts-ignore */
  const { theme } = useContext(Context);

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
    <div className="text-black z-auto dark:bg-slate-800 dark:text-white shadow-lg rounded-lg bg-[#FFFF] w-[400px] h-fit">
      <div className="flex items-center justify-between hover:text-blue-500 duration-200 text-gray-500">
        <h2 className="mr-3 text-xl text-gray-500">اعلانات</h2>
        <HiOutlineMailOpen size={22} className="ml-3" />
      </div>

      {notifications.length ? (
        <div>
          {notifications.map((item) => (
            <div
              key={item.id}
              className="mr-3 mb-11 border-b-[1px] p-3 border-gray-300"
            >
              {item.image === "ن م" ? (
                <div className="flex items-center gap-3">
                  <p className="bg-[#ae7f81] h-[40px] w-[40px] flex items-center justify-center rounded-[100%]">
                    {item.image}
                  </p>
                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] text-gray-400 dark:text-[#FFFF] font-bold">
                      {item.title}
                    </p>

                    <div className="flex items-center justify-between w-[300px]">
                      <p className="text-[13px] text-gray-500 dark:text-[#FFFF]">
                        {item.desc}
                      </p>
                      <IoCloseOutline
                        onClick={() => handeleDelete(item.id)}
                        size={20}
                        color="gray"
                      />
                    </div>
                    <p className="opacity-45 text-[13px] font-bold">
                      {item.date}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt="/"
                    className="w-[40px] rounded-[100%]"
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] text-gray-400 dark:text-[#FFFF] font-bold">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between w-[300px]">
                      <p className="text-[13px] text-gray-500 dark:text-[#FFFF]">
                        {item.desc}
                      </p>
                      <IoCloseOutline
                        onClick={() => handeleDelete(item.id)}
                        size={20}
                        color="gray"
                      />
                    </div>
                    <p className="opacity-45 text-[13px] font-bold">
                      {item.date}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center p-3">
          <span className="text-[14px] text-red-600 font-bold border-b-2 border-orange-500">
            اعلان ها خالی است
          </span>
        </div>
      )}
    </div>
  );
};

export default Notifay;
