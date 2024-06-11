import { FC, useContext, useEffect, useState } from "react";

import UserProfile from "./UserProfile";
import Notifay from "./Notifay";

//iamge
import image from "../assets/images/1.png";

//icons
import { VscSearch } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import HamburgerMenu from "./Hamburgermenu";
import Button from "../element/Button";
import MenuSetting from "./MenuSetting";
import { themContext } from "../data/LocalData";
import { Context } from "../context/ContextProvider";

const Navbar: FC = () => {
  const [search, setSearch] = useState<boolean>(false);

  const [profile, setProfile] = useState<boolean>(false);

  const [notify, setNotif] = useState<boolean>(false);

  const [hamburger, setHamburger] = useState<boolean>(false);
  /* @ts-ignore */
  const { theme, setTheme, shadow, menuSetting, setMenuSetting } =
    useContext(Context);

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const clickNotif = () => {
    setNotif((prev) => !prev);
    setProfile(false);
  };

  const profileSearch = () => {
    setNotif(false);
    setProfile((prev) => !prev);
  };

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
    <div
      className={`z-[20000]${
        hamburger
          ? "fixed top-0 left-0 right-0 w-[100%] h-[100%] bg-black/30 dark:bg-slate-800"
          : null
      }`}
    >
      <div
        className={`max-w-[1200px] dark:bg-slate-800 dark:text-white bg-[#FFF] duration-300 fixed left-0 lg:right-[3rem] right-[0.4rem] mt-[0.3rem] mx-auto ${
          shadow && "shadow-md"
        } rounded-lg p-4 z-[10000]`}
      >
        <div className="flex justify-between items-center">
          <div className="lg:hidden relative">
            <IoMenuSharp
              onClick={() => setHamburger(true)}
              size={25}
              color="gray"
              className="cursor-pointer"
            />
            <div
              className={`absolute mt-[-2.4rem] transition-all duration-300 ease-in ${
                hamburger
                  ? "right-[-1.4rem] top-[-13px]"
                  : "right-[-1600%] top-0"
              }`}
            >
              <HamburgerMenu
                hamburger={hamburger}
                setHamburger={setHamburger}
              />
            </div>
          </div>
          <div
            onClick={() => setSearch(true)}
            className="xl:flex hidden items-center text-sm cursor-pointer"
          >
            {search ? (
              <input
                onMouseLeave={() => setSearch(false)}
                type="text"
                placeholder="جستوجو"
                className="outline-none border-[1px] w-[900px] p-3 rounded-lg border-gray-400"
              />
            ) : (
              <div className="flex items-center gap-1">
                <VscSearch size={22} color="gray" />
                <p className="text-gray-500">(جستوجو Ctrl + X)</p>
              </div>
            )}
          </div>

          {!search && (
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="flex items-center  gap-7 ml-8">
                {themContext.map((items) => (
                  <button
                    onClick={() => setTheme(items.title)}
                    key={items.title}
                    className={` ${theme === items.title && "text-blue-600"}`}
                  >
                    {items.icon}
                  </button>
                ))}
              </div>

              <div className="relative">
                <IoNotificationsOutline
                  onClick={clickNotif}
                  size={25}
                  color="gray"
                />
                <div className="absolute top-[-1rem] left-[-6px] text-[11px] flex-col items-center text-white bg-red-500 w-[20px] h-[20px] rounded-[100%] flex justify-center">
                  <span>5</span>

                  <div
                    className={`absolute transition-all duration-300 ease-in lg:left-0 left-[-80px] ${
                      notify ? "top-[2.6rem]" : "top-[-6000%]"
                    }`}
                  >
                    <Notifay />
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  onClick={profileSearch}
                  className="w-[40px] rounded-[100%] object-cover"
                  src={image}
                  alt="/"
                />
                <div
                  className={`absolute transition-all duration-300 ease-in z-50 ${
                    profile
                      ? "top-[3rem] left-[1rem]"
                      : "top-[-1300%] left-[1rem]"
                  }`}
                >
                  <UserProfile />
                </div>
                <div className="absolute bg-green-500 w-[10px] h-[10px] flex justify-center rounded-[100%] top-[2rem] left-[1.6rem]">
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div
          className={`fixed  transition-all duration-200   ease-in ${
            menuSetting ? "left-0 top-[12rem]" : "left-0 top-[-100%]"
          }`}
        >
          <Button menuSetting={menuSetting} setMenuSetting={setMenuSetting} />
        </div>
        <div
          className={`absolute  transition-all duration-200 z-[200000]  ease-in left-1 ${
            !menuSetting ? "top-0" : "top-[-200%]"
          }`}
        >
          <MenuSetting />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
