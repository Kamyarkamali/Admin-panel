import { FC, useContext, useEffect, useState } from "react";
import { datadashBoard } from "../data/LocalData";
import { Context } from "../context/ContextProvider";

const dashboard: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

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
    <div className="fixed right-0 top-[-25px] z-[12000]">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`transition-all relative duration-300 lg:block hidden  ease-in ${
          open ? "w-[13rem] top-[-1.3rem]" : "w-[6rem]"
        } h-fit bg-[#F8F8F8] shadow-lg dark:bg-slate-800  shadow-gray-400`}
      >
        <div>
          <ul className={`${open ? "flex-row" : "flex flex-col items-center"}`}>
            {datadashBoard.map((item) => (
              <div key={item.id}>
                <div className={"flex gap-2 items-center justify-start mt-5"}>
                  <li className="mr-4">{item.icon}</li>
                  <div className="flex items-center p-2 text-gray-500 cursor-pointer rounded-lg hover:text-white hover:bg-blue-600 duration-300 justify-between w-full">
                    <li
                      className={`${
                        open
                          ? "block transition-all duration-300 ease-in"
                          : "hidden transition-all duration-300 ease-in"
                      } text-[12px] dark:text-white mr-3  duration-300 font-bold`}
                    >
                      {item.title}
                    </li>
                    <li
                      className={`${
                        open
                          ? "block transition-all duration-300 ease-in"
                          : "hidden transition-all duration-300 ease-in"
                      }`}
                    >
                      {item.arrow}
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
