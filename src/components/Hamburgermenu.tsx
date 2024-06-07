import { FC, useContext, useEffect } from "react";
import { datadashBoard } from "../data/LocalData";

//icons
import { IoCloseOutline } from "react-icons/io5";

//interfaces
import { IopenMenu } from "../types/interface";
import { Context } from "../context/ContextProvider";

const HamburgerMenu: FC<IopenMenu> = ({ hamburger, setHamburger }) => {
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
    <div className="transition-all w-[280px] relative duration-300  ease-in  h-fit bg-[#F8F8F8] dark:bg-slate-800 shadow-lg  shadow-gray-400">
      <div className="flex flex-col items-end cursor-pointer p-4">
        <IoCloseOutline
          size={25}
          onClick={() => setHamburger(false)}
          color="white"
          className="border-[1px] rounded-full bg-blue-400 hover:opacity-50 duration-150"
        />
      </div>
      <div>
        <ul className="flex flex-col">
          {datadashBoard.map((item) => (
            <div key={item.id}>
              <div className={"flex gap-2 items-center justify-start mt-5"}>
                <li className="mr-4">{item.icon}</li>
                <div className="flex items-center p-2 text-gray-500 dark:text-white cursor-pointer rounded-lg hover:text-white hover:bg-blue-600 duration-300 justify-between w-full">
                  <li className="text-[12px] mr-3  duration-300 font-bold">
                    {item.title}
                  </li>
                  <li>{item.arrow}</li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
