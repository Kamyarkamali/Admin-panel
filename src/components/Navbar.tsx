import { FC, useState } from "react";
import { MdLightMode } from "react-icons/md";

import UserProfile from "./UserProfile";
import Notifay from "./Notifay";

//iamge
import image from "../assets/images/1.png";

//icons
import { VscSearch } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import HamburgerMenu from "./Hamburgermenu";

const Navbar: FC = () => {
  const [search, setSearch] = useState<boolean>(false);

  const [profile, setProfile] = useState<boolean>(false);

  const [notify, setNotif] = useState<boolean>(false);

  const [hamburger, setHamburger] = useState<boolean>(false);

  const clickNotif = () => {
    setNotif((prev) => !prev);
    setProfile(false);
  };

  const profileSearch = () => {
    setNotif(false);
    setProfile((prev) => !prev);
  };

  return (
    <div
      className={`${
        hamburger
          ? "fixed top-0 left-0 right-0 w-[100%] h-[100%] bg-black/30"
          : null
      }`}
    >
      <div className="max-w-[1200px] mt-[1rem] mx-auto shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="xl:hidden relative">
            <IoMenuSharp
              onClick={() => setHamburger(true)}
              size={25}
              color="gray"
              className="cursor-pointer"
            />
            <div
              className={`absolute mt-[-2.4rem] transition-all duration-300 ease-in ${
                hamburger ? "right-[-1rem] top-0" : "right-[-1400%] top-0"
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
            className="flex items-center text-sm cursor-pointer"
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
              <div>
                <MdLightMode size={22} color="gray" />
              </div>

              <div className="relative">
                <IoNotificationsOutline
                  onClick={clickNotif}
                  size={25}
                  color="gray"
                />
                <div className="absolute top-[-1rem] left-[-6px] text-[11px] flex-col items-center text-white bg-red-500 w-[20px] h-[20px] rounded-[100%] flex justify-center">
                  <span>3</span>

                  <div
                    className={`absolute transition-all duration-300 ease-in left-0 ${
                      notify ? "top-[5rem]" : "top-[-4000%]"
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
                  className={`absolute transition-all duration-300 ease-in z-40 ${
                    profile
                      ? "top-[3rem] left-[1rem]"
                      : "top-[-1200%] left-[1rem]"
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
    </div>
  );
};

export default Navbar;
