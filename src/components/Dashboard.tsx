import { FC, useState } from "react";
import { datadashBoard } from "../data/LocalData";

//icon
import { IoArrowBack } from "react-icons/io5";

const dashboard: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      // onMouseLeave={() => setOpen(false)}
      // onMouseEnter={() => setOpen(true)}
      className={`transition-all relative duration-300 lg:block hidden  ease-in ${
        open ? "w-[13rem]" : "w-[6rem]"
      } h-fit bg-[#F8F8F8] shadow-lg  shadow-gray-400`}
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
                    } text-[12px] mr-3  duration-300 font-bold`}
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
      <div
        className={`absolute transition-all duration-200 ease-in top-[16rem] border-[1px] p-1 rounded-[100%] cursor-pointer bg-blue-400 text-white ${
          open ? "right-[13rem] rotate-180" : "right-[6rem]"
        }`}
      >
        <IoArrowBack size={22} onClick={() => setOpen((prev) => !prev)} />
      </div>
    </div>
  );
};

export default dashboard;
